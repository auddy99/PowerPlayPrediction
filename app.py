import numpy as np
from flask import Flask,request,jsonify,render_template
import tensorflow as tf
import pandas as pd

app = Flask(__name__)
model = tf.keras.models.load_model('model.h5')

@app.route('/')
@app.route('/home')
def home():
	return render_template('index.html')

@app.route('/predict',methods=['POST'])
def predict():
	float_features = [x for x in request.form.values()]
	float_features = float_features+request.form.getlist('bat_multiselect')
	float_features = float_features+request.form.getlist('multiple')
	print(float_features)

	ls =[]
	for i in float_features:
		if i not in ls:
			ls.append(i)
	df=pd.read_csv("df_ipldataframe.csv")
	df=df.append(pd.Series(), ignore_index=True)
	df.loc[0,'bat_team']=float(ls[0])
	df.loc[0,'bowl_team']=float(ls[1])
	df.loc[0,'innings']=float(ls[2])
	df.loc[0,'venue']=float(ls[3])
	print(ls)
	for i in df.columns:
		if (pd.isnull(df.iloc[0][i])==True):
			df.loc[0,i]=0.0

	if (len(ls)>4):
		for i in range(4,len(ls)):
			df.loc[0,ls[i]]=1.0

	prediction = model.predict(df)


	output = np.round(prediction[0],2)

	return render_template('index.html',prediction_text=f'Predicted PowerPlay Score: {output}')


if __name__=='__main__':
	app.run(debug=True)