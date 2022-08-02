from utils import generate_html
import os
from tqdm import tqdm

try:
    for i in tqdm(os.listdir('cy1')):
        if 'txt' in i:
            generate_html(os.path.join('cy1', i))
except:
    print(i)
# os.system('start python -m http.server 8089')
# os.startfile('http://127.0.0.1:8089/output_html/')
