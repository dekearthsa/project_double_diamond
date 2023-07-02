# from google.cloud import datastore
from pythainlp import word_tokenize
from flask import Flask , request, jsonify
from flask_cors import CORS

from pythainlp.corpus import thai_stopwords
from wordcloud import WordCloud
import matplotlib.pyplot as plt
from io import BytesIO
import base64
import matplotlib  
import os
import sys


matplotlib.use('Agg')    

set_port = os.getenv("PORT")
app = Flask(__name__) 
CORS(app)

is_font_path = "./THSarabunNew.ttf"

print(sys.version)

@app.route('/api/debug', methods = ['GET'])
def debugging():
    if request.method == 'GET':
        return "OK"

@app.route('/api/wordcloud', methods = ['POST'])
def send_word_cloud():

    image = BytesIO()
    set_stop_word =  thai_stopwords()

    if request.method == 'POST':
        req = request.get_json(force=True)
        arrayText = []
        text_l_p = req['text_l_p']
        text_r_p = req['text_r_p']
        text_l_s = req['text_l_s']
        text_r_s = req['text_r_s']
        arrayText.append(text_l_p)
        arrayText.append(text_r_p)
        arrayText.append(text_l_s)
        arrayText.append(text_r_s)
        # print(text_l_p)
        # print(text_r_p)
        # print(text_l_s)
        # print(text_r_s)
        if(len(arrayText) != 0):
            arrayBase64 = []
            for text in arrayText:
                words = word_tokenize(text) 
                all_words = ' '.join(words).lower().strip()
                # print("all_words ==> ",all_words)
                wordcloud = WordCloud(
                            regexp='[ก-๙]+',
                            font_path=is_font_path,
                            stopwords=set_stop_word,
                            width=250, 
                            height=250,
                            prefer_horizontal=1,
                            max_words=50, 
                            colormap='tab20c',
                            background_color = 'white').generate(all_words)

                plt.figure(figsize = (10, 9))
                plt.imshow(wordcloud)
                plt.axis('off')
                plt.tight_layout(pad=0)
                plt.savefig(image, format='png')

                base64_img = base64.encodestring(image.getvalue())
                convert_string = str(base64_img)
                arrayBase64.append(convert_string)
                
            return jsonify(
                status=200,
                img_l_p=arrayBase64[0],
                img_r_p=arrayBase64[1],
                img_l_s=arrayBase64[2],
                img_r_s=arrayBase64[3]
            )
        else:
            return jsonify(status=500)


@app.route("/api/genimg", methods= ['POST'])
def gen_text_to_img():

    image = BytesIO()
    set_stop_word =  thai_stopwords()

    req = request.get_json(force=True) 
    text = req['text']
    words = word_tokenize(text)
    all_words = ' '.join(words).lower().strip()
    wordcloud = WordCloud(
        regexp='[ก-๙]+',
        font_path=is_font_path,
        stopwords=set_stop_word,
        width=250, 
        height=250,
        prefer_horizontal=1,
        max_words=50, 
        colormap='tab20c',
        background_color = 'white').generate(all_words)
    plt.figure(figsize=(8, 13))
    plt.imshow(wordcloud)
    plt.axis('off')
    plt.tight_layout(pad=0)
    plt.savefig(image, format='png')
    base64_img = base64.encodestring(image.getvalue())
    return base64_img

if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0",port=3422)