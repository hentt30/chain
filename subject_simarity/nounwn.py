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

brown_ic = wordnet_ic.ic('ic-brown.dat') #load the brown corpus to compute the IC

match_subjects = match_subjects(wm_subjects)

print(match_subjects)
