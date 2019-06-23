from nltk.corpus import wordnet as wn
from nltk.corpus import wordnet_ic

def wm_subjects(subjects):
    wm_subjects = []
    for subject in subjects:
        wm_subjects.append(wn.synsets(subject, pos=wn.NOUN)[0])
    return wm_subjects

def match_subjects(wm_subjects):
    match_subjects = []
    aux = []
    for subi in wm_subjects:
        for subj in wm_subjects:
            aux.append(subi.res_similarity(subj, brown_ic)/subi.res_similarity(subi, brown_ic))
        match_subjects.append(aux)
        aux = []
    return match_subjects

subjects = []
with open("subjects.txt", "rt") as fin:
    for line in fin:
        subjects.append(line.replace('\n', ''))

wm_subjects = wm_subjects(subjects)

#subs = []
#for subject in subjects:
#    subs.append(wn.synsets(subject, pos=wn.NOUN)[0])
#    print(subs)

#dog=wn.synsets('software', pos=wn.NOUN)[0] #get the first noun synonym of the word "dog"
#cat=wn.synsets('cat', pos=wn.NOUN)[0]
#rose=wn.synsets('technology', pos=wn.NOUN)[0]
#flower=wn.synsets('science', pos=wn.NOUN)[0]

brown_ic = wordnet_ic.ic('ic-brown.dat') #load the brown corpus to compute the IC

match_subjects = match_subjects(wm_subjects)

print(match_subjects)
#subjects = []
#i = 0
#j = 0
#for subi in subs:
#    for subj in subs:
#        print(subjects[i],'+',subjects[j],':',subi.res_similarity(subj, brown_ic))
#        j = j + 1
#    i = i + 1
#    j = 0

#print(rose.res_similarity(flower, brown_ic))
#print(rose.res_similarity(dog, brown_ic))
#print(cat.res_similarity(dog, brown_ic))
