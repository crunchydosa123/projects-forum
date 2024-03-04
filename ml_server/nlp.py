import spacy

nlp = spacy.load("en_core_web_sm")

text1 = "Spacy is an awesome NLP library"
text2 = "spacy is spacy"

doc1= nlp(text1)
doc2 = nlp(text2)
similarity_score = doc1.similarity(doc2)


print