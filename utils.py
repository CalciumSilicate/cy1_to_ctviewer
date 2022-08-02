import os
from copy import deepcopy
import json


def analysis_cy1(file):
    with open(file, 'r') as f:
        chart = f.read().splitlines()
    output = {
        'version': None,
        'bpm': None,
        'page_shift': None,
        'page_size': None,
        'note': {},
        'link': [],
        'page_offset': None
    }
    for line in chart:
        tmp = line.split(' ')
        char = tmp[0].lower().strip()
        if char in ['version', 'bpm', 'page_shift', 'page_size']:
            output[char] = tmp[1]
        if char.startswith('note'):
            tmp = char.split('	')
            output['note'][int(tmp[1])] = tmp[1:]
        if char.startswith('link'):
            output['link'].append(tmp[1:-1])
    output['page_offset'] = is_up_page(output['page_size'], output['page_shift'], output['note'][0][1],
                                       is_called_for_num=True)

    return output


def analysis_note_hold(note, page_size, page_shift, page_offset):
    page_size, page_shift = float(page_size), float(page_shift)
    output = {
        'id': note[0],
        'type': None,
        'x': transform_x(note[2]),
        'y': transform_y(page_size, page_shift, note[1]),
        'end_y': None,
        'page_type': 'up' if is_up_page(page_size, page_shift, note[1]) else 'down',
        'page_number': is_up_page(page_size, page_shift, note[1], is_called_for_num=True) - page_offset
    }

    if float(note[-1]) == 0:
        output['type'] = 1
        del output['end_y']

    elif float(note[-1]) != 0:
        output['type'] = 2
        output['end_y'] = transform_hold_end_y(page_size, page_shift, note[1], note[-1])

    return output


def analysis_note_hold_with_chart(note, chart):
    return analysis_note_hold(note, chart['page_size'], chart['page_shift'], chart['page_offset'])


def analysis_note(chart):
    page_size, page_shift, page_offset, link_list = float(chart['page_size']), float(chart['page_shift']), int(
        chart['page_offset']), chart['link']
    output = []
    linked_id = []
    for link in link_list:
        for x in link:
            linked_id.append(int(x))
    for x in range(len(chart['note'])):
        if x not in linked_id:
            ana = analysis_note_hold(chart['note'][x], page_size, page_shift, page_offset)
            page_num = ana['page_number']
            output_ = {
                'id': x,
                'type': ana['type'],
                'positionX': ana['x'],
                'positionY': ana['y'],
                'page_number': page_num,
                'page_type': 'up' if is_up_page_num(page_num, chart) else 'down'
            } if ana['type'] == 1 else {
                'id': x,
                'type': ana['type'],
                'startX': ana['x'],
                'startY': ana['y'],
                'endY': ana['end_y'],
                'page_number': page_num,
                'page_type': 'up' if is_up_page_num(page_num, chart) else 'down'
            }
            output.append(output_)
    return sorted(output, key=lambda i: i['id'])


def analysis_drag(chart):
    page_size, page_shift, page_offset, link_list = float(chart['page_size']), float(chart['page_shift']), int(
        chart['page_offset']), chart['link']
    output = []
    for link in link_list:
        link_ = deepcopy(link)
        first_note = chart['note'][int(link_.pop(0))]
        last_note = chart['note'][int(link_.pop(-1))]
        page_num = is_up_page(page_size, page_shift, first_note[1], is_called_for_num=True) - page_offset
        output_ = {
            'id': int(first_note[0]),
            'type': 3,
            'startX': transform_x(first_note[2]),
            'startY': transform_y(page_size, page_shift, first_note[1]),
            'endX': transform_x(last_note[2]),
            'endY': transform_y(page_size, page_shift, last_note[1]),
            'subs': [],
            'page_number': page_num,
            'page_type': 'up' if is_up_page_num(page_num, chart) else 'down'
        }
        if len(link_) > 0:
            for i in link_:
                note = chart['note'][int(i)]
                output_['subs'].append({
                    'positionX': transform_x(note[2]),
                    'positionY': transform_y(page_size, page_shift, note[1])
                })
        output_['subs'] = sorted(output_['subs'], key=lambda i: i['positionY'])
        output.append(output_)
    return sorted(output, key=lambda i: i['page_number'])


def is_up_page(page_size, page_shift, arg, is_called_for_arg=False, is_called_for_num=False):
    page_size, page_shift = float(page_size), float(page_shift)
    arg = float(arg)
    arg += page_shift
    t = 0
    while arg >= page_size:
        arg -= page_size
        t += 1
    if is_called_for_arg:
        return t % 2, arg
    elif is_called_for_num:
        return t
    if t % 2 == 0:  # up
        return True
    elif t % 2 == 1:  # down
        return False


def get_first_page_type(chart):
    return 'up' if is_up_page(chart['page_size'], chart['page_shift'], chart['note'][0][1]) else 'down'


def is_up_page_num(page_num, chart):
    return page_num % 2 == 0 if get_first_page_type(chart) == 'up' else page_num % 2 != 0


def transform_y(page_size, page_shift, arg):
    page_size, page_shift = float(page_size), float(page_shift)
    arg = float(arg)
    t, arg = is_up_page(page_size, page_shift, arg, is_called_for_arg=True)
    if t % 2 == 0:  # up
        return round(640 - arg / page_size * 500)
    elif t % 2 == 1:  # down
        return round(140 + arg / page_size * 500)


def transform_hold_end_y(page_size, page_shift, y_arg, h_arg):
    page_size, page_shift = float(page_size), float(page_shift)
    y_arg, h_arg = float(y_arg), float(h_arg)
    t, y_arg = is_up_page(page_size, page_shift, y_arg, is_called_for_arg=True)
    if t % 2 == 0:  # up
        return round(640 - y_arg / page_size * 500 - h_arg / page_size * 500)
    elif t % 2 == 1:  # down
        return round(140 + y_arg / page_size * 500 + h_arg / page_size * 500)


def transform_x(arg):
    arg = float(arg)
    return round(900 * arg + 30)


def export_laishin(chart):
    output = {
        'chapterId': 'C',
        'alias': "custom",
        'difficulty': "custom",
        'bpm': 1,
        'timePerPage': 1,
        'startDirection': get_first_page_type(chart),
        'barStartTime': 1,
        'measureStartTime': 1,
        'totalNotesCount': 'Custom',
        'normalNotesCount': 'Custom',
        'longNotesCount': 'Custom',
        'slideNoteGroupsCount': 'Custom',
        'slideNotesCount': 'Custom',
        'displayHeight': 720,
        'displayWidth': 960,
        'fieldTop': 140,
        'fieldBottom': 640,
        'horizontalPositions': [],
        'pages': []
    }
    note_list = analysis_note(chart)
    note_list.extend(analysis_drag(chart))
    max_page = max(x['page_number'] for x in note_list)
    note_list_by_page = {}
    for note in note_list:
        if note['page_number'] not in note_list_by_page:
            note_list_by_page[note['page_number']] = []
        note_list_by_page[note['page_number']].append(note)
    for x in range(max_page + 1):
        output['pages'].append({
            'pageNumber': x,
            'direction': 'up' if is_up_page_num(x, chart) else 'down',
            'notes': []
        })
        if x in note_list_by_page:
            for note in note_list_by_page[x]:
                del note['page_number'], note['page_type']
                output['pages'][x]['notes'].append(note)
    i = 1
    for x in range(len(output['pages'])):
        for n in range(len(output['pages'][x]['notes'])):
            output['pages'][x]['notes'][n]['id'] = i
            i += 1
    return output


def generate_html(file_path):
    file_name = file_path.replace('\\', '/').split('/')[-1]
    output_name = '.'.join(file_name.split('.')[:-1])
    chart_ = analysis_cy1(file_path)
    with open(os.path.join('output', '{}.json'.format(output_name)), 'w', encoding='utf-8') as f:
        f.write(json.dumps(export_laishin(chart_), indent=2))
    with open(os.path.join('res', 'main.html'), 'r', encoding='utf-8') as html:
        text = html.read()
        text_split = text.split('customJSONPATH')
        js_path = 'http://127.0.0.1:8089/output/{}'.format('{}.json'.format(output_name))
        text = ''.join(
            [text_split[0], js_path.replace('\\', '/'), text_split[1]])
    with open(os.path.join('output_html', '{}.html'.format(output_name)), 'w', encoding='utf-8') as html:
        html.write(text)
