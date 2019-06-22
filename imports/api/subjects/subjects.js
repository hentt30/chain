import { Mongo } from 'meteor/mongo';
import { allSubjects } from './allSubjects.js';
import { UsersSubjects } from '../../../lib/collections';

const Subjects = new Mongo.Collection('subjects');

const quant_tmp = Subjects.find().count();

let i = quant_tmp;

while (i < allSubjects.length) {
    Subjects.insert({
        [i]: [ allSubjects[i] ]
    });

    UsersSubjects.update({}, {$addToSet: {[i]: [parseFloat(0), false]}});

    i++;
}

export const quant = Subjects.find().count();
export const subjects = Subjects.find({}).fetch();

export const weightSubject = [[1.0, 0.0678128352770181, 0.0678128352770181, 0.0678128352770181, 0.0678128352770181, 0.0678128352770181, -0.0, 0.0678128352770181, 0.0678128352770181, 0.0678128352770181, 0.0678128352770181, 0.0678128352770181, 0.0678128352770181, 0.0678128352770181, 0.0678128352770181, 0.0678128352770181, 0.0678128352770181, 0.0678128352770181, 0.26142107527644914, -0.0, 0.0678128352770181, 0.26142107527644914, 0.26142107527644914, 0.26142107527644914, 0.0678128352770181, -0.0, 0.0678128352770181, -0.0, 0.0678128352770181, -0.0], [0.05827391799954407, 1.0, 0.05827391799954407, 0.05827391799954407, 0.05827391799954407, 0.05827391799954407, -0.0, 0.05827391799954407, 0.05827391799954407, 0.05827391799954407, 0.05827391799954407, 0.05827391799954407, 0.05827391799954407, 0.05827391799954407, 0.05827391799954407, 0.05827391799954407, 0.05827391799954407, 0.05827391799954407, 0.05827391799954407, -0.0, 0.05827391799954407, 0.05827391799954407, 0.05827391799954407, 0.05827391799954407, 0.05827391799954407, -0.0, 0.05827391799954407, -0.0, 0.05827391799954407, -0.0], [0.06919802335538745, 0.06919802335538745, 1.0, 0.06919802335538745, 0.06919802335538745, 0.06919802335538745, -0.0, 0.06919802335538745, 0.06919802335538745, 0.06919802335538745, 0.06919802335538745, 0.06919802335538745, 0.06919802335538745, 0.06919802335538745, 0.06919802335538745, 0.06919802335538745, 0.06919802335538745, 0.06919802335538745, 0.06919802335538745, -0.0, 0.06919802335538745, 0.06919802335538745, 0.06919802335538745, 0.06919802335538745, 0.06919802335538745, -0.0, 0.06919802335538745, -0.0, 0.06919802335538745, -0.0], [0.0853495217272351, 0.0853495217272351, 0.0853495217272351, 1.0, 0.0853495217272351, 0.0853495217272351, -0.0, 0.0853495217272351, 0.0853495217272351, 0.374998986959245, 0.5732229491775079, 0.0853495217272351, 0.0853495217272351, 0.0853495217272351, 0.0853495217272351, 0.0853495217272351, 0.0853495217272351, 0.374998986959245, 0.0853495217272351, -0.0, 0.374998986959245, 0.0853495217272351, 0.0853495217272351, 0.0853495217272351, 0.374998986959245, -0.0, 0.0853495217272351, -0.0, 0.0853495217272351, -0.0], [0.06028064937768468, 0.06028064937768468, 0.06028064937768468, 0.06028064937768468, 1.0, 0.161032529446616, -0.0, 0.20587914102148772, 0.20587914102148772, 0.06028064937768468, 0.06028064937768468, 0.161032529446616, 0.161032529446616, 0.161032529446616, 0.161032529446616, 0.161032529446616, 0.161032529446616, 0.06028064937768468, 0.161032529446616, -0.0, 0.06028064937768468, 0.06028064937768468, 0.06028064937768468, 0.06028064937768468, 0.06028064937768468, -0.0, 0.23579657708370552, -0.0, 0.31781978888911305, -0.0], [0.08295973509911657, 0.08295973509911657, 0.08295973509911657, 0.08295973509911657, 0.22161698858833803, 1.0, -0.0, 0.22161698858833803, 0.22161698858833803, 0.08295973509911657, 0.08295973509911657, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.08295973509911657, 0.4580902868276219, -0.0, 0.08295973509911657, 0.08295973509911657, 0.08295973509911657, 0.08295973509911657, 0.08295973509911657, -0.0, 0.22161698858833803, -0.0, 0.22161698858833803, -0.0], [-0.0, -0.0, -0.0, -0.0, -0.0, -0.0, 1.0, 0.6758673189077047, 0.6758673189077047, -0.0, -0.0, -0.0, -0.0, -0.0, -0.0, -0.0, -0.0, -0.0, -0.0, 1.0, -0.0, -0.0, -0.0, -0.0, -0.0, 0.225922307662581, -0.0, 0.34007781120903746, -0.0, 0.225922307662581], [0.07627715836155358, 0.07627715836155358, 0.07627715836155358, 0.07627715836155358, 0.26051271851178937, 0.20376528582169115, 0.5862666927206905, 1.0, 1.0, 0.07627715836155358, 0.07627715836155358, 0.20376528582169115, 0.20376528582169115, 0.20376528582169115, 0.20376528582169115, 0.20376528582169115, 0.20376528582169115, 0.07627715836155358, 0.20376528582169115, 0.5862666927206905, 0.07627715836155358, 0.07627715836155358, 0.07627715836155358, 0.07627715836155358, 0.07627715836155358, 0.19597148792343802, 0.26051271851178937, 0.2949932450757251, 0.26051271851178937, 0.19597148792343802], [0.07627715836155358, 0.07627715836155358, 0.07627715836155358, 0.07627715836155358, 0.26051271851178937, 0.20376528582169115, 0.5862666927206905, 1.0, 1.0, 0.07627715836155358, 0.07627715836155358, 0.20376528582169115, 0.20376528582169115, 0.20376528582169115, 0.20376528582169115, 0.20376528582169115, 0.20376528582169115, 0.07627715836155358, 0.20376528582169115, 0.5862666927206905, 0.07627715836155358, 0.07627715836155358, 0.07627715836155358, 0.07627715836155358, 0.07627715836155358, 0.19597148792343802, 0.26051271851178937, 0.2949932450757251, 0.26051271851178937, 0.19597148792343802], [0.06216936174588677, 0.06216936174588677, 0.06216936174588677, 0.2731526457654541, 0.06216936174588677, 0.06216936174588677, -0.0, 0.06216936174588677, 0.06216936174588677, 1.0, 0.2731526457654541, 0.06216936174588677, 0.06216936174588677, 0.06216936174588677, 0.06216936174588677, 0.06216936174588677, 0.06216936174588677, 0.2731526457654541, 0.06216936174588677, -0.0, 0.2731526457654541, 0.06216936174588677, 0.06216936174588677, 0.06216936174588677, 0.6974748788907653, -0.0, 0.06216936174588677, -0.0, 0.06216936174588677, -0.0], [0.07084584943039574, 0.07084584943039574, 0.07084584943039574, 0.4758136416658827, 0.07084584943039574, 0.07084584943039574, -0.0, 0.07084584943039574, 0.07084584943039574, 0.31127440703851084, 1.0, 0.07084584943039574, 0.07084584943039574, 0.07084584943039574, 0.07084584943039574, 0.07084584943039574, 0.07084584943039574, 0.31127440703851084, 0.07084584943039574, -0.0, 0.31127440703851084, 0.07084584943039574, 0.07084584943039574, 0.07084584943039574, 0.31127440703851084, -0.0, 0.07084584943039574, -0.0, 0.07084584943039574, -0.0], [0.06575498610992918, 0.06575498610992918, 0.06575498610992918, 0.06575498610992918, 0.17565656386125178, 0.7926132602926959, -0.0, 0.17565656386125178, 0.17565656386125178, 0.06575498610992918, 0.06575498610992918, 1.0, 0.7926132602926959, 0.7926132602926959, 0.7926132602926959, 0.7926132602926959, 0.7926132602926959, 0.06575498610992918, 0.3630884357508576, -0.0, 0.06575498610992918, 0.06575498610992918, 0.06575498610992918, 0.06575498610992918, 0.06575498610992918, -0.0, 0.17565656386125178, -0.0, 0.17565656386125178, -0.0], [0.06122573652341123, 0.06122573652341123, 0.06122573652341123, 0.06122573652341123, 0.16355721647628438, 0.7380175027109411, -0.0, 0.16355721647628438, 0.16355721647628438, 0.06122573652341123, 0.06122573652341123, 0.7380175027109411, 1.0, 0.8950520734921287, 0.8950520734921287, 0.8950520734921287, 0.8950520734921287, 0.06122573652341123, 0.33807864950066024, -0.0, 0.06122573652341123, 0.06122573652341123, 0.06122573652341123, 0.06122573652341123, 0.06122573652341123, -0.0, 0.16355721647628438, -0.0, 0.16355721647628438, -0.0], [0.05150906745899995, 0.05150906745899995, 0.05150906745899995, 0.05150906745899995, 0.13760029973117266, 0.6208923810744963, -0.0, 0.13760029973117266, 0.13760029973117266, 0.05150906745899995, 0.05150906745899995, 0.6208923810744963, 0.7530051943955801, 1.0, 0.7530051943955801, 0.7530051943955801, 0.7530051943955801, 0.05150906745899995, 0.2844247689355011, -0.0, 0.05150906745899995, 0.05150906745899995, 0.05150906745899995, 0.05150906745899995, 0.05150906745899995, -0.0, 0.13760029973117266, -0.0, 0.13760029973117266, -0.0], [0.057395612480002356, 0.057395612480002356, 0.057395612480002356, 0.057395612480002356, 0.15332549918106966, 0.6918490326834897, -0.0, 0.15332549918106966, 0.15332549918106966, 0.057395612480002356, 0.057395612480002356, 0.6918490326834897, 0.8390599260481478, 0.8390599260481478, 1.0, 0.9269599633908098, 0.8390599260481478, 0.057395612480002356, 0.31692932182339256, -0.0, 0.057395612480002356, 0.057395612480002356, 0.057395612480002356, 0.057395612480002356, 0.057395612480002356, -0.0, 0.15332549918106966, -0.0, 0.15332549918106966, -0.0], [0.05420332536306833, 0.05420332536306833, 0.05420332536306833, 0.05420332536306833, 0.1447976867824522, 0.6533690747482332, -0.0, 0.1447976867824522, 0.1447976867824522, 0.05420332536306833, 0.05420332536306833, 0.6533690747482332, 0.7923922440333883, 0.7923922440333883, 0.8754033683622764, 1.0, 0.7923922440333883, 0.05420332536306833, 0.2993020268557161, -0.0, 0.05420332536306833, 0.05420332536306833, 0.05420332536306833, 0.05420332536306833, 0.05420332536306833, -0.0, 0.1447976867824522, -0.0, 0.1447976867824522, -0.0], [0.04940701033636901, 0.04940701033636901, 0.04940701033636901, 0.04940701033636901, 0.13198490608506763, 0.5955540995561248, -0.0, 0.13198490608506763, 0.13198490608506763, 0.04940701033636901, 0.04940701033636901, 0.5955540995561248, 0.72227546057702, 0.72227546057702, 0.72227546057702, 0.72227546057702, 1.0, 0.04940701033636901, 0.27281754828703125, -0.0, 0.04940701033636901, 0.04940701033636901, 0.04940701033636901, 0.04940701033636901, 0.04940701033636901, -0.0, 0.13198490608506763, -0.0, 0.13198490608506763, -0.0], [0.10293858004109338, 0.10293858004109338, 0.10293858004109338, 0.45227978380241224, 0.10293858004109338, 0.10293858004109338, -0.0, 0.10293858004109338, 0.10293858004109338, 0.45227978380241224, 0.45227978380241224, 0.10293858004109338, 0.10293858004109338, 0.10293858004109338, 0.10293858004109338, 0.10293858004109338, 0.10293858004109338, 1.0, 0.10293858004109338, -0.0, 0.45227978380241224, 0.10293858004109338, 0.10293858004109338, 0.10293858004109338, 0.45227978380241224, -0.0, 0.10293858004109338, -0.0, 0.10293858004109338, -0.0], [0.2731899304340054, 0.07086568568456268, 0.07086568568456268, 0.07086568568456268, 0.18930918519564702, 0.39130889512475203, -0.0, 0.18930918519564702, 0.18930918519564702, 0.07086568568456268, 0.07086568568456268, 0.39130889512475203, 0.39130889512475203, 0.39130889512475203, 0.39130889512475203, 0.39130889512475203, 0.39130889512475203, 0.07086568568456268, 1.0, -0.0, 0.07086568568456268, 0.2731899304340054, 0.2731899304340054, 0.2731899304340054, 0.07086568568456268, -0.0, 0.18930918519564702, -0.0, 0.18930918519564702, -0.0], [-0.0, -0.0, -0.0, -0.0, -0.0, -0.0, 0.7171212773748024, 0.48467883507097614, 0.48467883507097614, -0.0, -0.0, -0.0, -0.0, -0.0, -0.0, -0.0, -0.0, -0.0, -0.0, 1.0, -0.0, -0.0, -0.0, -0.0, -0.0, 0.1620136938584532, -0.0, 0.24387703438105185, -0.0, 0.1620136938584532], [0.11549442278903631, 0.11549442278903631, 0.11549442278903631, 0.5074462125721674, 0.11549442278903631, 0.11549442278903631, -0.0, 0.11549442278903631, 0.11549442278903631, 0.5074462125721674, 0.5074462125721674, 0.11549442278903631, 0.11549442278903631, 0.11549442278903631, 0.11549442278903631, 0.11549442278903631, 0.11549442278903631, 0.5074462125721674, 0.11549442278903631, -0.0, 1.0, 0.11549442278903631, 0.11549442278903631, 0.11549442278903631, 0.5074462125721674, -0.0, 0.11549442278903631, -0.0, 0.11549442278903631, -0.0], [0.2012495248245913, 0.052204287133607516, 0.052204287133607516, 0.052204287133607516, 0.052204287133607516, 0.052204287133607516, -0.0, 0.052204287133607516, 0.052204287133607516, 0.052204287133607516, 0.052204287133607516, 0.052204287133607516, 0.052204287133607516, 0.052204287133607516, 0.052204287133607516, 0.052204287133607516, 0.052204287133607516, 0.052204287133607516, 0.2012495248245913, -0.0, 0.052204287133607516, 1.0, 0.7312723122020744, 0.7312723122020744, 0.052204287133607516, -0.0, 0.052204287133607516, -0.0, 0.052204287133607516, -0.0], [0.21695298016666004, 0.05627777596485651, 0.05627777596485651, 0.05627777596485651, 0.05627777596485651, 0.05627777596485651, -0.0, 0.05627777596485651, 0.05627777596485651, 0.05627777596485651, 0.05627777596485651, 0.05627777596485651, 0.05627777596485651, 0.05627777596485651, 0.05627777596485651, 0.05627777596485651, 0.05627777596485651, 0.05627777596485651, 0.21695298016666004, -0.0, 0.05627777596485651, 0.7883333269178391, 1.0, 0.7883333269178391, 0.05627777596485651, -0.0, 0.05627777596485651, -0.0, 0.05627777596485651, -0.0], [0.18135674226631082, 0.047044083483616106, 0.047044083483616106, 0.047044083483616106, 0.047044083483616106, 0.047044083483616106, -0.0, 0.047044083483616106, 0.047044083483616106, 0.047044083483616106, 0.047044083483616106, 0.047044083483616106, 0.047044083483616106, 0.047044083483616106, 0.047044083483616106, 0.047044083483616106, 0.047044083483616106, 0.047044083483616106, 0.18135674226631082, -0.0, 0.047044083483616106, 0.6589887075068285, 0.6589887075068285, 1.0, 0.047044083483616106, -0.0, 0.047044083483616106, -0.0, 0.047044083483616106, -0.0], [0.056387519847177436, 0.056387519847177436, 0.056387519847177436, 0.24774904875756779, 0.056387519847177436, 0.056387519847177436, -0.0, 0.056387519847177436, 0.056387519847177436, 0.632608691353708, 0.24774904875756779, 0.056387519847177436, 0.056387519847177436, 0.056387519847177436, 0.056387519847177436, 0.056387519847177436, 0.056387519847177436, 0.24774904875756779, 0.056387519847177436, -0.0, 0.24774904875756779, 0.056387519847177436, 0.056387519847177436, 0.056387519847177436, 1.0, -0.0, 0.056387519847177436, -0.0, 0.056387519847177436, -0.0], [-0.0, -0.0, -0.0, -0.0, -0.0, -0.0, 0.14146950476007136, 0.14146950476007136, 0.14146950476007136, -0.0, -0.0, -0.0, -0.0, -0.0, -0.0, -0.0, -0.0, -0.0, -0.0, 0.14146950476007136, -0.0, -0.0, -0.0, -0.0, -0.0, 1.0, -0.0, 0.14146950476007136, -0.0, 0.20540706004798132], [0.07270823047874655, 0.07270823047874655, 0.07270823047874655, 0.07270823047874655, 0.28440887829997835, 0.19423132276200117, -0.0, 0.24832360285916422, 0.24832360285916422, 0.07270823047874655, 0.07270823047874655, 0.19423132276200117, 0.19423132276200117, 0.19423132276200117, 0.19423132276200117, 0.19423132276200117, 0.19423132276200117, 0.07270823047874655, 0.19423132276200117, -0.0, 0.07270823047874655, 0.07270823047874655, 0.07270823047874655, 0.07270823047874655, 0.07270823047874655, -0.0, 1.0, -0.0, 0.28440887829997835, -0.0], [-0.0, -0.0, -0.0, -0.0, -0.0, -0.0, 0.30374480344334864, 0.30374480344334864, 0.30374480344334864, -0.0, -0.0, -0.0, -0.0, -0.0, -0.0, -0.0, -0.0, -0.0, -0.0, 0.30374480344334864, -0.0, -0.0, -0.0, -0.0, -0.0, 0.20178536991423324, -0.0, 1.0, -0.0, 0.20178536991423324], [0.08021406712594122, 0.08021406712594122, 0.08021406712594122, 0.08021406712594122, 0.4229154487068494, 0.2142822656995586, -0.0, 0.2739586153801821, 0.2739586153801821, 0.08021406712594122, 0.08021406712594122, 0.2142822656995586, 0.2142822656995586, 0.2142822656995586, 0.2142822656995586, 0.2142822656995586, 0.2142822656995586, 0.08021406712594122, 0.2142822656995586, -0.0, 0.08021406712594122, 0.08021406712594122, 0.08021406712594122, 0.08021406712594122, 0.08021406712594122, -0.0, 0.31376905619834583, -0.0, 1.0, -0.0], [-0.0, -0.0, -0.0, -0.0, -0.0, -0.0, 0.30971090223944375, 0.30971090223944375, 0.30971090223944375, -0.0, -0.0, -0.0, -0.0, -0.0, -0.0, -0.0, -0.0, -0.0, -0.0, 0.30971090223944375, -0.0, -0.0, -0.0, -0.0, -0.0, 0.44968564781296405, -0.0, 0.30971090223944375, -0.0, 1.0]];
