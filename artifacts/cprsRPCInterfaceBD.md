---
layout: default
title: VDP Year 2 - CPRS RPC Interface Breakdown
---

# CPRS RPC Interface

1050 RPCs, 30 (2.9%) locked, which divide into four groups ...

Name | Number
--- | ---
[Clinical](#clinical-417) | 417 (39.7%)
[Non Clinical](#non-clinical-555) | 555 (52.9%)
[Authentication](#authentication-18) | 18 (1.7%)
[Out of Scope](#out-of-scope-60) | 60 (5.7%)

Most - 745 (71%) - of the interface's RPCs _READ_ data.






## Clinical (417)

Category | Number
--- | ---
CHANGE | 81 (19.4%)
READ | 286 (68.6%)
UTILITY | 50 (12%)



\# | Name | Category | Tags | Files | Parameters
--- | --- | --- | --- | --- | ---
1. | DG CHK BS5 XREF ARRAY | READ | XREF |  | 
2. | DG CHK BS5 XREF Y/N | READ | IS-A, UNSTRUCTURED READ, XREF |  | 
3. | DG CHK PAT/DIV MEANS TEST | READ | - |  | 
4. | DG SENSITIVE RECORD BULLETIN | CHANGE | BULLETIN | 38.1 | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
5. | GMRC LIST CONSULT REQUESTS | READ | PARAMETER |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
6. | __GMV ADD VM__ | CHANGE | RPCLOCKER |  | 
7. | GMV ALLERGY | READ | - |  | 
8. | GMV CLOSEST READING | READ | - |  | 
9. | GMV EXTRACT REC | READ | - | 120.5 | 
10. | GMV LATEST VM | READ | - |  | 
11. | __GMV MARK ERROR__ | CHANGE | RPCLOCKER |  | 
12. | GMV V/M ALLDATA | READ | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
13. | __OR GET COMBAT VET__ | READ | RPCLOCKER |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
14. | ORALWORD ALLWORD | READ | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
15. | ORB DELETE ALERT | CHANGE | ALERT | 8992.1 | 
16. | ORB FOLLOW-UP ARRAY | READ | DFN TO K/META | 8992, 8992.1 | 
17. | ORB FOLLOW-UP STRING | READ | DFN TO K/META | 8992, 8992.1 | 
18. | ORB FOLLOW-UP TYPE | READ | DFN TO K/META | 100.9 | 
19. | ORB FORWARD ALERT | CHANGE | ALERT |  | 
20. | ORB RENEW ALERT | CHANGE | ALERT |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
21. | ORCDLR2 CHECK ALL LC TO WC | READ | - |  | 
22. | ORCDLR2 CHECK ONE LC TO WC | READ | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
23. | ORCHECK DELMONO | UTILITY | REENTRANCY |  | 
24. | ORCHECK GETMONO | READ | REENTRANCY |  | 
25. | ORCHECK GETMONOL | READ | REENTRANCY |  | 
26. | ORCHECK GETXTRA | READ | REENTRANCY |  | 
27. | ORCHECK ISMONO | READ | IS-A, REENTRANCY |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
28. | ORCNOTE GET TOTAL | READ | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
29. | ORDEA HASHINFO | READ | - |  | 
30. | ORDEA ORDHINFO | READ | - |  | 
31. | ORDEA PINLKCHK | UTILITY | LOCK |  | 
32. | ORDEA PINLKSET | UTILITY | LOCK |  | 
33. | ORDEA PNDHLD | READ | IS-A |  | 
34. | ORDEA SIGINFO | READ | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
35. | ORECS01 VSITID | READ | IEN-LOOKUP |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
36. | OREVNTX LIST | READ | - | 100.2 | 
37. | OREVNTX PAT | READ | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
38. | OREVNTX1 CHGEVT | CHANGE | - |  | 
39. | OREVNTX1 COMP | READ | - | 100.2 | 
40. | OREVNTX1 CURSPE | READ | - |  | 
41. | OREVNTX1 DELPTEVT | CHANGE | - | 100.2 | 
42. | OREVNTX1 DIV | READ | LOCATION | 100.2 | 
43. | OREVNTX1 DONE | CHANGE | - | 100.2 | 
44. | OREVNTX1 EMPTY | READ | IS-A | 100.2 | 
45. | OREVNTX1 EVT | READ | - | 100.2, 100.5 | 
46. | OREVNTX1 EXISTS | READ | - | 100.2 | 
47. | OREVNTX1 GETSTS | READ | - |  | 
48. | OREVNTX1 GTEVT | READ | - | 100.2, 100.5 | 
49. | OREVNTX1 HAVEPRT | READ | - | 100.2 | 
50. | OREVNTX1 ISDCOD | READ | IS-A, PARAMETER |  | OREVNT EXCLUDE DGRP
51. | OREVNTX1 ISHDORD | READ | IS-A | 100, 100.98, 100.01 | 
52. | OREVNTX1 ISPASS | READ | IS-A |  | 
53. | OREVNTX1 LOC | READ | LOCATION | 100.2 | 
54. | OREVNTX1 MATCH | READ | - |  | 
55. | OREVNTX1 NAME | READ | - | 100.5, 100.2 | 
56. | OREVNTX1 ODPTEVID | READ | - | 100, 100.2 | 
57. | OREVNTX1 PUTEVNT | CHANGE | - | 100.2 | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
58. | ORIMO IMOLOC | READ | - |  | 
59. | ORIMO IMOOD | READ | IS-A |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
60. | ORK TRIGGER | READ | LOGIC |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
61. | ORPRF GETFLG | READ | REENTRANCY |  | 
62. | ORPRF HASFLG | READ | REENTRANCY |  | 
63. | ORPRF TRIGGER POPUP | READ | IS-A |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
64. | ORQOR DETAIL | READ | JLV, UNSTRUCTURED READ |  | 
65. | ORQOR LIST | READ | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
66. | ORQPT ATTENDING/PRIMARY | READ | - |  | 
67. | ORQPT CLINIC PATIENTS | READ | PARAMETER, QUERY |  | 
68. | ORQPT DEFAULT PATIENT LIST | READ | PARAMETER |  | 
69. | ORQPT MAKE RPL | UTILITY | REENTRANCY | 100.21 | 
70. | ORQPT PATIENT TEAM PROVIDERS | READ | QUERY, XREF | 100.21 | 
71. | ORQPT PROVIDER PATIENTS | READ | QUERY, XREF |  | 
72. | ORQPT READ RPL | READ | REENTRANCY |  | 
73. | ORQPT SPECIALTY PATIENTS | READ | QUERY | 2 | 
74. | ORQPT TEAM PATIENTS | READ | REENTRANCY | 100.21 | 
75. | ORQPT WARD PATIENTS | READ | LOCATION | 42, 2 | 
76. | ORQPT WARDRMBED | READ | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
77. | __ORQQAL DETAIL__ | READ | JLV, RPCLOCKER, UNSTRUCTURED READ |  | 
78. | __ORQQAL LIST__ | READ | RPCLOCKER |  | 
79. | ORQQAL LIST REPORT | READ | UNSTRUCTURED READ |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
80. | ORQQCN ADDCMT | CHANGE | ALERT | 123 | 
81. | ORQQCN ADMIN COMPLETE | CHANGE | - |  | 
82. | ORQQCN ASSIGNABLE MED RESULTS | READ | - | 123, 697.2 | 
83. | ORQQCN ATTACH MED RESULTS | CHANGE | - | 123 | 
84. | ORQQCN CANEDIT | READ | - | 123 | 
85. | ORQQCN DETAIL | READ | JLV, UNSTRUCTURED READ | 123 | 
86. | ORQQCN DISCONTINUE | CHANGE | - | 123 | 
87. | ORQQCN FIND CONSULT | READ | - | 123 | 
88. | ORQQCN FORWARD | CHANGE | - | 123, 123.5 | 
89. | ORQQCN GET CONSULT | READ | - | 123 | 
90. | ORQQCN GET MED RESULT DETAILS | READ | UNSTRUCTURED READ | 691.5 | 
91. | ORQQCN GET ORDER NUMBER | READ | - | 123, 100 | 
92. | ORQQCN LIST | READ | QUERY | 123 | 
93. | ORQQCN LOAD FOR EDIT | READ | - | 123 | 
94. | ORQQCN MED RESULTS | READ | - | 123 | 
95. | ORQQCN RECEIVE | CHANGE | - | 123 | 
96. | ORQQCN REMOVABLE MED RESULTS | READ | - | 123, 697.2 | 
97. | ORQQCN REMOVE MED RESULTS | CHANGE | - | 123 | 
98. | ORQQCN RESUBMIT | CHANGE | - | 123 | 
99. | ORQQCN SET ACT MENUS | READ | CPRS CONFIG | 123 | 
100. | ORQQCN SHOW SF513 | CHANGE | - | 123 | 
101. | ORQQCN SIGFIND | READ | - | 123 | 
102. | ORQQCN UNRESOLVED | READ | IS-A |  | 
103. | ORQQCN URGENCIES | READ | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
104. | ORQQCN2 GET PREREQUISITE | READ | - |  | 
105. | ORQQCN2 SCHEDULE CONSULT | CHANGE | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
106. | ORQQLR DETAIL | READ | UNSTRUCTURED READ |  | 
107. | ORQQLR SEARCH RANGE INPT | READ | PARAMETER |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
108. | __ORQQPL ADD SAVE__ | CHANGE | RPCLOCKER |  | 
109. | ORQQPL AUDIT HIST | READ | - |  | 
110. | ORQQPL CHECK DUP | READ | - |  | 
111. | __ORQQPL DELETE__ | CHANGE | RPCLOCKER |  | 
112. | __ORQQPL DETAIL__ | READ | JLV, RPCLOCKER, UNSTRUCTURED READ |  | 
113. | ORQQPL EDIT LOAD | READ | - |  | 
114. | __ORQQPL EDIT SAVE__ | CHANGE | RPCLOCKER |  | 
115. | ORQQPL INACTIVATE | CHANGE | - |  | 
116. | ORQQPL INIT PT | READ | - |  | 
117. | ORQQPL LIST | READ | - |  | 
118. | ORQQPL PROB COMMENTS | READ | JLV |  | 
119. | __ORQQPL PROBLEM LIST__ | READ | RPCLOCKER |  | 
120. | __ORQQPL REPLACE__ | CHANGE | RPCLOCKER |  | 
121. | __ORQQPL UPDATE__ | CHANGE | RPCLOCKER |  | 
122. | ORQQPL VERIFY | CHANGE | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
123. | ORQQPP LIST | READ | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
124. | ORQQPS DETAIL | READ | - |  | 
125. | ORQQPS LIST | READ | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
126. | ORQQPX IMMUN LIST | READ | - | 9000010.11 | 
127. | ORQQPX REMINDER DETAIL | UTILITY | JLV, eHMP | 811.9 | 
128. | ORQQPX REMINDERS LIST | UTILITY | eHMP | 811.9 | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
129. | ORQQPXRM GEC DIALOG | UTILITY | COMPUTATION | 801.41, 811.9, 801.5 | 
130. | ORQQPXRM GEC FINISHED? | UTILITY | - | 801.5 | 
131. | ORQQPXRM GEC STATUS PROMPT | UTILITY | - | 801.5 | 
132. | ORQQPXRM MENTAL HEALTH RESULTS | READ | - | 801.41 | 
133. | ORQQPXRM MENTAL HEALTH SAVE | CHANGE | - |  | 
134. | ORQQPXRM MHDLL | READ | - |  | 
135. | ORQQPXRM MHV | READ | - |  | 
136. | ORQQPXRM REMINDER DETAIL | UTILITY | UNSTRUCTURED READ | 811.9 | 
137. | ORQQPXRM REMINDER DIALOG | READ | - | 811.9, 801.41 | 
138. | ORQQPXRM REMINDER EVALUATION | UTILITY | - |  | 
139. | ORQQPXRM REMINDERS APPLICABLE | UTILITY | - |  | 
140. | ORQQPXRM REMINDERS UNEVALUATED | UTILITY | - |  | 
141. | ORQQPXRM WOMEN HEALTH SAVE | CHANGE | - | 790.1 | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
142. | ORQQVI NOTEVIT | READ | - |  | 
143. | __ORQQVI VITALS__ | READ | RPCLOCKER |  | 
144. | ORQQVI VITALS FOR DATE RANGE | READ | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
145. | ORQQVI1 DETAIL | READ | - |  | 
146. | ORQQVI1 GRID | READ | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
147. | ORQQVI2 VITALS VAL & STORE | CHANGE | EXTERNAL I/F | 120.5 | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
148. | ORQQVS DETAIL NOTES | READ | QUERY |  | 
149. | ORQQVS DETAIL SUMMARY | READ | - |  | 
150. | ORQQVS VISITS/APPTS | READ | QUERY |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
151. | ORQQXQA PATIENT | READ | - | 100.9, 8992 | 
152. | ORQQXQA USER | READ | - | 100.9, 8992 | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
153. | ORRHCQ QRYITR | UTILITY | FMUTILITY |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
154. | ORVAA VAA | READ | BUSINESS |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
155. | ORWCS LIST OF CONSULT REPORTS | READ | - |  | 
156. | ORWCS REPORT TEXT | READ | UNSTRUCTURED READ |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
157. | ORWCV DTLVST | READ | - |  | 
158. | ORWCV LAB | READ | - |  | 
159. | ORWCV POLL | UTILITY | REENTRANCY |  | 
160. | ORWCV START | UTILITY | PARAMETER, REENTRANCY |  | ORWOR COVER RETRIEVAL
161. | ORWCV STOP | UTILITY | REENTRANCY |  | 
162. | ORWCV VST | READ | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
163. | ORWD FORMID | READ | DFN TO K/META | 100, 101.41, 8989.52 | 
164. | ORWD GET4EDIT | READ | DFN TO K/META |  | 
165. | ORWD SIGN | CHANGE | XUSEC |  | 
166. | ORWD VALIDACT | READ | IS-A |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
167. | ORWD1 COMLOC | UTILITY | LOCATION |  | 
168. | ORWD1 SIG4ANY | UTILITY | IS-A |  | 
169. | ORWD1 SIG4ONE | READ | IS-A |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
170. | ORWD2 DEVINFO | READ | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
171. | ORWDAL32 LOAD FOR EDIT | READ | - |  | 
172. | __ORWDAL32 SAVE ALLERGY__ | CHANGE | BULLETIN, PROTOCOL, RPCLOCKER |  | 
173. | ORWDAL32 SEND BULLETIN | UTILITY | BULLETIN |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
174. | ORWDBA1 GETORDX | READ | - |  | 
175. | ORWDBA1 ORPKGTYP | UTILITY | FMUTILITY, HARD CODED |  | 
176. | ORWDBA1 RCVORCI | CHANGE | - |  | 
177. | ORWDBA1 SCLST | CHANGE | PARAMETER | 100, 9.4 | OR BILLING AWARENESS BY USER
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
178. | ORWDBA2 GETDUDC | UTILITY | FMUTILITY |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
179. | ORWDBA4 GETTFCI | READ | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
180. | ORWDCN32 DEF | READ | IS-A |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
181. | ORWDFH ADDLATE | CHANGE | - |  | 
182. | ORWDFH CURISO | READ | - |  | 
183. | ORWDFH CURRENT MEALS | READ | - |  | 
184. | ORWDFH ISOLIST | READ | - | 119.4 | 
185. | ORWDFH PARAM | READ | - |  | 
186. | ORWDFH TXT | READ | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
187. | ORWDPS1 DOWSCH | READ | - |  | 
188. | ORWDPS1 SCHALL | READ | LOCATION |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
189. | ORWDPS2 ADMIN | READ | LOCATION |  | 
190. | ORWDPS2 CHKGRP | READ | COMPUTED |  | 
191. | ORWDPS2 CHKPI | READ | - |  | 
192. | ORWDPS2 MAXREF | READ | - |  | 
193. | ORWDPS2 QTY2DAY | READ | COMPUTED |  | 
194. | ORWDPS2 REQST | READ | LOCATION |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
195. | ORWDPS32 SCSTS | READ | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
196. | ORWDPS33 COMPLOC | READ | IS-A, LOCATION |  | 
197. | ORWDPS33 IVDOSFRM | READ | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
198. | ORWDPS4 CPINFO | CHANGE | - |  | 
199. | ORWDPS4 CPLST | READ | - |  | 
200. | ORWDPS4 IPOD4OP | READ | IS-A |  | 
201. | ORWDPS4 ISUDIV | READ | IS-A |  | 
202. | ORWDPS4 UPDTDG | CHANGE | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
203. | ORWDPS5 ISVTP | READ | COMPUTED, IS-A |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
204. | ORWDRA32 ISOLATN | READ | COMPUTED, IS-A |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
205. | ORWDX CHANGE | CHANGE | - |  | 
206. | ORWDX DLGID | READ | - |  | 
207. | ORWDX DLGQUIK | READ | DFN TO K/META |  | 
208. | ORWDX FORMID | READ | DFN TO K/META |  | 
209. | ORWDX LOCK | UTILITY | LOCK |  | 
210. | ORWDX LOCK ORDER | UTILITY | LOCK |  | 
211. | ORWDX SAVE | CHANGE | - |  | 
212. | ORWDX SEND | CHANGE | - |  | 
213. | ORWDX SENDED | CHANGE | - |  | 
214. | ORWDX UNLKOTH | UTILITY | LOCK |  | 
215. | ORWDX UNLOCK | UTILITY | LOCK |  | 
216. | ORWDX UNLOCK ORDER | UTILITY | LOCK |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
217. | ORWDX1 DCORIG | CHANGE | - |  | 
218. | ORWDX1 DCREN | CHANGE | - |  | 
219. | ORWDX1 ORDMATCH | UTILITY | IS-A |  | 
220. | ORWDX1 PATWARD | READ | - |  | 
221. | ORWDX1 STCHANGE | UTILITY | IS-A |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
222. | ORWDXA ALERT | CHANGE | - |  | 
223. | ORWDXA COMPLETE | CHANGE | - |  | 
224. | ORWDXA DC | CHANGE | - |  | 
225. | ORWDXA DCREQIEN | READ | - |  | 
226. | ORWDXA FLAG | CHANGE | - |  | 
227. | ORWDXA FLAGTXT | READ | - |  | 
228. | ORWDXA HOLD | CHANGE | - |  | 
229. | ORWDXA OFCPLX | READ | IS-A |  | 
230. | ORWDXA UNFLAG | CHANGE | - |  | 
231. | ORWDXA UNHOLD | CHANGE | - |  | 
232. | ORWDXA VALID | UTILITY | IS-A |  | 
233. | ORWDXA VERIFY | CHANGE | - |  | 
234. | ORWDXA WCGET | READ | - |  | 
235. | ORWDXA WCPUT | CHANGE | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
236. | ORWDXC ACCEPT | UTILITY | PARAMETER, REENTRANCY |  | 
237. | ORWDXC DELAY | UTILITY | PARAMETER, REENTRANCY |  | 
238. | ORWDXC DELORD | CHANGE | REENTRANCY |  | 
239. | ORWDXC DISPLAY | UTILITY | PARAMETER, REENTRANCY |  | 
240. | ORWDXC SAVECHK | UTILITY | REENTRANCY |  | 
241. | ORWDXC SESSION | UTILITY | REENTRANCY |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
242. | ORWDXM AUTOACK | CHANGE | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
243. | ORWDXM1 BLDQRSP | UTILITY | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
244. | ORWDXM2 CLRRCL | UTILITY | REENTRANCY |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
245. | ORWDXR CANRN | READ | COMPUTED, IS-A |  | 
246. | ORWDXR GETPKG | READ | - |  | 
247. | ORWDXR GTORITM | READ | - |  | 
248. | ORWDXR ISCPLX | READ | COMPUTED, IS-A |  | 
249. | ORWDXR ISNOW | READ | COMPUTED, IS-A |  | 
250. | ORWDXR ISREL | READ | IS-A |  | 
251. | ORWDXR ORCPLX | READ | - |  | 
252. | ORWDXR RENEW | CHANGE | - |  | 
253. | ORWDXR RNWFLDS | READ | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
254. | ORWDXR01 CANCHG | READ | COMPUTED, IS-A |  | 
255. | ORWDXR01 OXDATA | READ | - |  | 
256. | ORWDXR01 SAVCHG | CHANGE | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
257. | ORWDXVB GETALL | READ | - |  | 
258. | ORWDXVB RAW | READ | - |  | 
259. | ORWDXVB RESULTS | READ | UNSTRUCTURED READ |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
260. | ORWGRPC ALLITEMS | READ | - |  | 
261. | ORWGRPC DATEITEM | READ | - |  | 
262. | ORWGRPC DETAIL | READ | - |  | 
263. | ORWGRPC DETAILS | READ | UNSTRUCTURED READ |  | 
264. | ORWGRPC FASTDATA | READ | - |  | 
265. | ORWGRPC FASTITEM | READ | - |  | 
266. | ORWGRPC FASTLABS | READ | - |  | 
267. | ORWGRPC FASTTASK | UTILITY | REENTRANCY, TASK |  | 
268. | ORWGRPC ITEMDATA | READ | - |  | 
269. | ORWGRPC ITEMS | READ | - |  | 
270. | ORWGRPC LOOKUP | READ | - |  | 
271. | ORWGRPC TYPES | READ | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
272. | ORWLR CUMULATIVE REPORT | UTILITY | - |  | 
273. | ORWLR CUMULATIVE SECTION | READ | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
274. | ORWLRR CHART | READ | - |  | 
275. | ORWLRR GRID | READ | - |  | 
276. | ORWLRR INTERIM | READ | ORWLRR INTERIM |  | 
277. | ORWLRR INTERIMG | READ | - |  | 
278. | ORWLRR INTERIMS | READ | - |  | 
279. | ORWLRR MICRO | READ | - |  | 
280. | ORWLRR NEWOLD | READ | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
281. | ORWMC PATIENT PROCEDURES | READ | - |  | 
282. | ORWMC PATIENT PROCEDURES1 | READ | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
283. | ORWNSS VALSCH | READ | IS-A |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
284. | ORWOR ACTION TEXT | READ | - |  | 
285. | ORWOR RESULT | READ | - |  | 
286. | ORWOR RESULT HISTORY | READ | - |  | 
287. | ORWOR SHEETS | READ | - |  | 
288. | ORWOR UNSIGN | READ | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
289. | ORWOR1 CHKDIG | READ | - |  | 
290. | ORWOR1 GETDSCH | READ | - |  | 
291. | ORWOR1 GETDSIG | READ | - |  | 
292. | ORWOR1 GETDTEXT | READ | - |  | 
293. | ORWOR1 SETDTEXT | CHANGE | - |  | 
294. | ORWOR1 SIG | CHANGE | REENTRANCY |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
295. | ORWORB AUTOUNFLAG ORDERS | CHANGE | - |  | 
296. | ORWORB FASTUSER | READ | - |  | 
297. | ORWORB GET TIU ALERT INFO | READ | - |  | 
298. | ORWORB GETDATA | READ | - | 8992 | 
299. | ORWORB KILL EXPIR MED ALERT | CHANGE | - |  | 
300. | ORWORB KILL EXPIR OI ALERT | CHANGE | - |  | 
301. | ORWORB KILL UNSIG ORDERS ALERT | CHANGE | - |  | 
302. | ORWORB KILL UNVER MEDS ALERT | CHANGE | - |  | 
303. | ORWORB KILL UNVER ORDERS ALERT | CHANGE | - |  | 
304. | ORWORB TEXT FOLLOWUP | READ | - |  | 
305. | ORWORB UNSIG ORDERS FOLLOWUP | CHANGE | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
306. | ORWORR AGET | READ | QUERY |  | 
307. | ORWORR GET | READ | QUERY |  | 
308. | ORWORR GET4LST | UTILITY | FMUTILITY |  | 
309. | ORWORR GETBYIFN | READ | - |  | 
310. | ORWORR GETTXT | READ | - |  | 
311. | ORWORR RGET | READ | QUERY |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
312. | ORWPCE ACTPROB | READ | - |  | 
313. | ORWPCE CPTREQD | READ | IS-A |  | 
314. | ORWPCE CXNOSHOW | READ | IS-A |  | 
315. | ORWPCE DELETE | CHANGE | - |  | 
316. | ORWPCE GET VISIT | READ | IEN-LOOKUP |  | 
317. | ORWPCE HASVISIT | READ | IS-A |  | 
318. | ORWPCE NOTEVSTR | READ | - |  | 
319. | ORWPCE PCE4NOTE | READ | - |  | 
320. | ORWPCE SAVE | CHANGE | - |  | 
321. | ORWPCE SCDIS | READ | - |  | 
322. | ORWPCE SCSEL | READ | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
323. | ORWPS ACTIVE | READ | - |  | 
324. | ORWPS COVER | READ | QUERY |  | 
325. | ORWPS DETAIL | READ | JLV |  | 
326. | ORWPS MEDHIST | READ | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
327. | ORWPS1 REFILL | CHANGE | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
328. | ORWPT ADMITLST | READ | JLV |  | 
329. | ORWPT APPTLST | READ | LOCATION |  | 
330. | ORWPT BYWARD | READ | LOCATION |  | 
331. | ORWPT CWAD | READ | - |  | 
332. | __ORWPT DIEDON__ | READ | RPCLOCKER |  | 
333. | ORWPT DISCHARGE | READ | - |  | 
334. | ORWPT ENCTITL | READ | - |  | 
335. | ORWPT FULLSSN | READ | QUERY |  | 
336. | ORWPT FULLSSN RPL | READ | QUERY |  | 
337. | __ORWPT ID INFO__ | READ | RPCLOCKER |  | 
338. | __ORWPT INPLOC__ | READ | RPCLOCKER |  | 
339. | ORWPT LAST5 | READ | QUERY |  | 
340. | ORWPT LAST5 RPL | READ | QUERY |  | 
341. | __ORWPT LIST ALL__ | READ | RPCLOCKER |  | 
342. | __ORWPT PTINQ__ | READ | JLV, RPCLOCKER, UNSTRUCTURED READ |  | 
343. | ORWPT SELCHK | CHANGE | - |  | 
344. | ORWPT SELECT | CHANGE | BULLETIN, JLV, REENTRANCY |  | 
345. | ORWPT SHARE | UTILITY | REENTRANCY |  | 
346. | ORWPT TOP | READ | REENTRANCY |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
347. | ORWPT1 PCDETAIL | READ | - |  | 
348. | __ORWPT1 PRCARE__ | READ | JLV, RPCLOCKER |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
349. | ORWPT16 ADMITLST | READ | - |  | 
350. | ORWPT16 APPTLST | READ | - |  | 
351. | ORWPT16 DEMOG | READ | - |  | 
352. | ORWPT16 GETVSIT | READ | - |  | 
353. | ORWPT16 ID INFO | READ | - |  | 
354. | ORWPT16 LIST ALL | READ | - |  | 
355. | ORWPT16 LOOKUP | READ | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
356. | ORWRA IMAGING EXAMS | READ | - |  | 
357. | ORWRA IMAGING EXAMS1 | READ | - |  | 
358. | ORWRA REPORT TEXT | READ | - |  | 
359. | ORWRA REPORT TEXT1 | READ | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
360. | ORWRP REPORT TEXT | READ | JLV, UNSTRUCTURED READ |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
361. | ORWRP1 LISTNUTR | READ | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
362. | ORWRP2 HS REPORT TEXT | READ | UNSTRUCTURED READ |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
363. | ORWRP4 HDR MODIFY | UTILITY | - | 101.24 | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
364. | ORWSR CASELIST | READ | - |  | 
365. | ORWSR IS NON-OR PROCEDURE | READ | IS-A |  | 
366. | ORWSR LIST | READ | - |  | 
367. | ORWSR ONECASE | READ | - |  | 
368. | ORWSR RPTLIST | READ | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
369. | ORWTIU CHKTXT | READ | - |  | 
370. | ORWTIU GET LISTBOX ITEM | READ | - |  | 
371. | ORWTIU GET SAVED CP FIELDS | READ | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
372. | ORWTPT ATEAMS | READ | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
373. | ORWU2 COSIGNER | READ | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
374. | PXRM REMINDER DIALOG (TIU) | UTILITY | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
375. | TIU CREATE ADDENDUM RECORD | CHANGE | - |  | 
376. | TIU CREATE RECORD | CHANGE | - |  | 
377. | TIU DELETE RECORD | CHANGE | - |  | 
378. | TIU DETAILED DISPLAY | READ | - |  | 
379. | TIU DOCUMENTS BY CONTEXT | READ | QUERY |  | 
380. | TIU FIELD LOCK | UTILITY | LOCK |  | 
381. | TIU FIELD UNLOCK | UTILITY | LOCK |  | 
382. | TIU GET ADDITIONAL SIGNERS | READ | - |  | 
383. | TIU GET ALERT INFO | READ | - |  | 
384. | TIU GET DOCUMENT PARAMETERS | READ | - |  | 
385. | TIU GET DOCUMENT STATUS | READ | - |  | 
386. | TIU GET DOCUMENT TITLE | READ | - |  | 
387. | TIU GET DOCUMENTS FOR REQUEST | READ | - |  | 
388. | TIU GET LINKED PRF NOTES | READ | - |  | 
389. | TIU GET PRF ACTIONS | READ | - |  | 
390. | TIU GET RECORD TEXT | READ | - |  | 
391. | TIU GET REQUEST | READ | - |  | 
392. | TIU HAS AUTHOR SIGNED? | READ | IS-A |  | 
393. | TIU ID ATTACH ENTRY | CHANGE | - |  | 
394. | TIU ID CAN RECEIVE | READ | IS-A |  | 
395. | TIU ID DETACH ENTRY | CHANGE | - |  | 
396. | TIU JUSTIFY DELETE? | READ | - |  | 
397. | TIU LINK TO FLAG | CHANGE | - |  | 
398. | TIU LOAD RECORD FOR EDIT | READ | - |  | 
399. | TIU LOCK RECORD | UTILITY | LOCK |  | 
400. | TIU NOTES | READ | QUERY |  | 
401. | TIU NOTES 16 BIT | READ | QUERY |  | 
402. | TIU NOTES BY VISIT | READ | QUERY |  | 
403. | TIU ONE VISIT NOTE? | READ | IS-A |  | 
404. | TIU SET ADMINISTRATIVE CLOSURE | CHANGE | - |  | 
405. | TIU SET DOCUMENT TEXT | UTILITY | REENTRANCY |  | 
406. | TIU SIGN RECORD | CHANGE | - |  | 
407. | TIU SUMMARIES | READ | QUERY |  | 
408. | TIU SUMMARIES BY VISIT | READ | QUERY |  | 
409. | TIU TEMPLATE LOCK | UTILITY | LOCK |  | 
410. | TIU TEMPLATE UNLOCK | UTILITY | LOCK |  | 
411. | TIU UNLOCK RECORD | UTILITY | LOCK |  | 
412. | TIU UPDATE ADDITIONAL SIGNERS | CHANGE | - |  | 
413. | TIU UPDATE RECORD | CHANGE | - |  | 
414. | TIU WAS THIS SAVED? | CHANGE | - |  | 
415. | TIU WHICH SIGNATURE ACTION | READ | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
416. | VAFCTFU CONVERT ICN TO DFN | READ | QUERY |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
417. | YS GAF API | READ | - |  | 





## Non Clinical (555)



Non Clinical RPCs come in three flavors ...

Name | Number
--- | ---
[Knowledge](#knowledge-276) | 276 (49.7%)
[User](#user-179) | 179 (32.3%)
[Other](#other-100) | 100 (18%)




#### Knowledge (276)

Category | Number
--- | ---
CHANGE | 12 (4.3%)
READ | 258 (93.5%)
UTILITY | 6 (2.2%)

... most take data from specific files.

\# | Name | Category | Tags | Files | Parameters
--- | --- | --- | --- | --- | ---
1. | GMV GET CATEGORY IEN | READ | IEN-LOOKUP | 120.53 | 
2. | GMV GET VITAL TYPE IEN | READ | IEN-LOOKUP | 120.51 | 
3. | GMV VITALS/CAT/QUAL | READ | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
4. | ORBCMA5 GETUDID | READ | IEN-LOOKUP | 101.41 | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
5. | ORDDPAPI ADMTIME | READ | PARAMETER |  | 
6. | ORDDPAPI CLOZMSG | READ | PARAMETER |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
7. | ORDEA CSVALUE | READ | - |  | 
8. | ORDEA DEATEXT | READ | PARAMETER |  | 
9. | ORDEA LNKMSG | READ | PARAMETER |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
10. | OREVNTX ACTIVE | READ | - | 100.5 | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
11. | OREVNTX1 CPACT | READ | - | 100.5 | 
12. | OREVNTX1 DEFLTS | READ | - | 100.5 | 
13. | OREVNTX1 DFLTDLG | READ | - | 101.41, 100.5 | 
14. | OREVNTX1 DIV1 | READ | LOCATION | 100.5 | 
15. | OREVNTX1 DLGIEN | READ | IEN-LOOKUP |  | 
16. | OREVNTX1 GETDLG | READ | - |  | 
17. | OREVNTX1 GTEVT1 | READ | - | 100.5 | 
18. | OREVNTX1 ISPASS1 | READ | IS-A |  | 
19. | OREVNTX1 LOC1 | READ | LOCATION | 100.5 | 
20. | OREVNTX1 MULTS | READ | - | 100.5 | 
21. | OREVNTX1 PRMPTID | READ | - | 101.41 | 
22. | OREVNTX1 PROMPT IDS | READ | - | 101.41 | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
23. | ORIMO ISIVQO | READ | IS-A |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
24. | ORQPT SPECIALTIES | READ | - | 45.7 | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
25. | ORQQCN DEFAULT REQUEST REASON | READ | - | 123.3, 123.5 | 
26. | ORQQCN EDIT DEFAULT REASON | READ | - | 123.3, 123.5 | 
27. | ORQQCN GET PROC IEN | READ | - | 123.3, 101.43 | 
28. | ORQQCN GET PROC SVCS | READ | XREF | 123.3, 123.5, 101.43 | 
29. | ORQQCN GET SERVICE IEN | READ | - | 101.43, 123.5 | 
30. | ORQQCN ISPROSVC | READ | IS/A | 123.5 | 
31. | ORQQCN PROVDX | READ | - | 123.3, 123.5 | 
32. | ORQQCN STATUS | READ | XREF | 123.1 | 
33. | ORQQCN SVC W/SYNONYMS | READ | - | 123.5 | 
34. | ORQQCN SVCLIST | READ | - |  | 
35. | ORQQCN SVCTREE | READ | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
36. | ORQQPL PROBLEM LEX SEARCH | READ | LEXICON |  | 
37. | ORQQPL SERV FILTER LIST | READ | - | 49 | 
38. | ORQQPL SRVC SRCH | READ | - | 49 | 
39. | ORQQPL USER PROB LIST | READ | - | 125.12 | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
40. | ORQQPL4 LEX | READ | LEXICON |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
41. | ORQQPX LVREMLST | READ | PARAMETER |  | ORQQPX COVER SHEET REM CLASSES, ORQQPX COVER SHEET REMINDERS
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
42. | ORQQPXRM CHECK REM VERSION | READ | - | 9.4 | 
43. | ORQQPXRM DIALOG ACTIVE | READ | - | 811.9, 801.41 | 
44. | ORQQPXRM DIALOG PROMPTS | READ | - | 801.41 | 
45. | ORQQPXRM EDUCATION SUBTOPICS | READ | - | 9999999.09 | 
46. | ORQQPXRM EDUCATION SUMMARY | READ | - |  | 
47. | ORQQPXRM EDUCATION TOPIC | READ | - | 9999999.09 | 
48. | ORQQPXRM GET WH LETTER TEXT | READ | - | 790.404 | 
49. | ORQQPXRM MENTAL HEALTH | READ | - | 601.71 | 
50. | ORQQPXRM REMINDER INQUIRY | READ | - | 811.9 | 
51. | ORQQPXRM REMINDER WEB | READ | - | 811.9, 800 | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
52. | ORQQVI2 VITALS HELP | READ | HARD CODED, UNSTRUCTURED READ |  | 
53. | ORQQVI2 VITALS VALIDATE TYPE | UTILITY | HARD CODED |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
54. | ORQQXMB MAIL GROUPS | READ | - | 3.8 | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
55. | ORWCOM DETAILS | READ | - | 101.15 | 
56. | ORWCOM GETOBJS | READ | LIST | 101.15 | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
57. | ORWCV1 COVERSHEET LIST | READ | PARAMETER | 101.24, 8994 | ORWCV1 COVERSHEET LIST
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
58. | ORWD DEF | READ | - | 101.41 | 
59. | ORWD OI | READ | - | 101.43 | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
60. | ORWDAL32 ALLERGY MATCH | READ | - |  | 
61. | ORWDAL32 DEF | READ | HARD CODED | 120.84 | 
62. | ORWDAL32 SITE PARAMS | READ | - |  | 
63. | ORWDAL32 SYMPTOMS | READ | - | 120.83 | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
64. | ORWDBA3 HINTS | READ | - | 9.2 | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
65. | ORWDBA7 GETIEN9 | READ | IEN-LOOKUP |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
66. | ORWDCN32 NEWDLG | READ | PARAMETER | 101.41 | ORWDX NEW PROCEDURE
67. | ORWDCN32 ORDRMSG | READ | - | 101.43 | 
68. | ORWDCN32 PROCEDURES | READ | QUERY | 101.43 | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
69. | ORWDCSLT DEF | READ | HARD CODED | 101.43, 101.42 | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
70. | ORWDFH ATTR | READ | - | 101.43 | 
71. | ORWDFH DIETS | READ | - |  | 
72. | ORWDFH FINDTYP | READ | - | 100.98 | 
73. | ORWDFH ISOIEN | READ | IEN-LOOKUP | 101.43 | 
74. | ORWDFH OPDIETS | READ | - | 119.9 | 
75. | ORWDFH QTY2CC | READ | - | 101.43 | 
76. | ORWDFH TFPROD | READ | - | 101.43 | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
77. | ORWDGX LOAD | READ | PARAMETER | 101.43 | 
78. | ORWDGX VMDEF | READ | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
79. | ORWDLR ABBSPEC | READ | - | 61 | 
80. | ORWDLR ALLSAMP | READ | - | 61, 62 | 
81. | ORWDLR DEF | READ | PARAMETER |  | 
82. | ORWDLR LOAD | READ | - | 101.43 | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
83. | ORWDLR32 ABBSPEC | READ | - | 61 | 
84. | ORWDLR32 ALLSAMP | READ | - | 62, 64.91 | 
85. | ORWDLR32 ALLSPEC | READ | - |  | 
86. | ORWDLR32 DEF | READ | PARAMETER |  | 
87. | ORWDLR32 LOAD | READ | - | 101.43 | 
88. | ORWDLR32 ONE SAMPLE | READ | - | 62, 61 | 
89. | ORWDLR32 ONE SPECIMEN | READ | - | 61 | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
90. | ORWDOR LKSCRN | READ | QUERY | 101.41 | 
91. | ORWDOR VMSLCT | READ | - | 101.43 | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
92. | ORWDPS1 DFLTSPLY | UTILITY | FMUTILITY | 101.43 | 
93. | ORWDPS1 DOSEALT | READ | - | 101.43 | 
94. | ORWDPS1 FORMALT | READ | - |  | 
95. | ORWDPS1 HASOIPI | READ | - | 101.41 | 
96. | ORWDPS1 HASROUTE | READ | - | 101.41 | 
97. | ORWDPS1 ODSLCT | READ | - | 101.42 | 
98. | ORWDPS1 QOMEDALT | READ | - | 101.41, 101.43, 9.4 | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
99. | ORWDPS2 OISLCT | READ | HARD CODED |  | 
100. | ORWDPS2 QOGRP | READ | - |  | 
101. | ORWDPS2 SCHREQ | READ | IS-A |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
102. | ORWDPS32 ALLIVRTE | READ | - | 51.2 | 
103. | ORWDPS32 ALLROUTE | READ | - | 51.2 | 
104. | ORWDPS32 DLGSLCT | READ | - |  | 
105. | ORWDPS32 DOSES | READ | - | 101.43 | 
106. | ORWDPS32 DRUGMSG | READ | - | 50 | 
107. | ORWDPS32 FORMALT | READ | - | 101.43 | 
108. | ORWDPS32 ISSPLY | READ | IS-A | 101.43 | 
109. | ORWDPS32 IVAMT | READ | - | 101.43 | 
110. | ORWDPS32 MEDISIV | READ | IS-A | 101.43 | 
111. | ORWDPS32 OISLCT | READ | - | 101.43 | 
112. | ORWDPS32 VALROUTE | UTILITY | - | 51.2 | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
113. | ORWDPS33 GETADDFR | READ | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
114. | ORWDPS5 LESGRP | READ | HARD CODED |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
115. | ORWDRA DEF | READ | HARD CODED | 101.42, 101.43 | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
116. | ORWDRA32 DEF | READ | HARD CODED |  | 
117. | ORWDRA32 IMTYPSEL | READ | - | 101.42, 79.3 | 
118. | ORWDRA32 PROCMSG | READ | - |  | 
119. | ORWDRA32 RADSRC | READ | - | 34 | 
120. | ORWDRA32 RAORDITM | READ | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
121. | ORWDX AGAIN | READ | IS-A |  | 
122. | ORWDX DGNM | READ | IEN-LOOKUP |  | 
123. | ORWDX DGRP | READ | IEN-LOOKUP |  | 
124. | ORWDX DISMSG | READ | - |  | 
125. | ORWDX DLGDEF | READ | - |  | 
126. | ORWDX LOADRSP | READ | - |  | 
127. | ORWDX MSG | READ | - |  | 
128. | ORWDX ORDITM | READ | QUERY |  | 
129. | ORWDX WRLST | READ | LOCATION |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
130. | ORWDX2 DCREASON | READ | QUERY |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
131. | ORWDXA ISACTOI | READ | IS-A | 101.43 | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
132. | ORWDXC FILLID | READ | - | 101.41, 100.98 | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
133. | ORWDXM DLGNAME | READ | IEN-LOOKUP |  | 
134. | ORWDXM FORMID | READ | - | 101.41 | 
135. | ORWDXM LOADSET | READ | - |  | 
136. | ORWDXM MENU | READ | - |  | 
137. | ORWDXM PROMPTS | READ | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
138. | ORWDXM3 ISUDQO | READ | COMPUTED, IS-A |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
139. | ORWDXQ DLGNAME | READ | - |  | 
140. | ORWDXQ DLGSAVE | __CHANGE__ | - |  | 
141. | ORWDXQ GETQLST | READ | - |  | 
142. | ORWDXQ GETQNAM | READ | - |  | 
143. | ORWDXQ PUTQLST | __CHANGE__ | - |  | 
144. | ORWDXQ PUTQNAM | __CHANGE__ | HARD CODED |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
145. | ORWDXR01 ISSPLY | READ | IS-A |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
146. | ORWDXVB COMPORD | READ | PARAMETER | 101.43 | 
147. | ORWDXVB SUBCHK | READ | COMPUTED | 101.43 | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
148. | ORWDXVB3 DIAGORD | READ | PARAMETER |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
149. | ORWGN IDTVALID | READ | - |  | 
150. | ORWGN MAXFRQ | READ | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
151. | ORWGRPC CLASS | READ | - |  | 
152. | ORWGRPC RPTPARAM | READ | - | 101.24 | 
153. | ORWGRPC TAX | READ | - |  | 
154. | ORWGRPC TESTSPEC | READ | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
155. | ORWLRR ALLTESTS | READ | - | 60 | 
156. | ORWLRR ATESTS | READ | - | 60 | 
157. | ORWLRR ATOMICS | READ | - | 60 | 
158. | ORWLRR CHEMTEST | READ | - | 60 | 
159. | ORWLRR INFO | READ | - | 60 | 
160. | ORWLRR PARAM | READ | - | 69.9 | 
161. | ORWLRR SPEC | READ | - | 61 | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
162. | ORWNSS QOSCH | READ | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
163. | ORWOR TSALL | READ | - | 45.7 | 
164. | ORWOR VWGET | READ | PARAMETER |  | ORCH CONTEXT ORDERS
165. | ORWOR VWSET | __CHANGE__ | PARAMETER |  | ORCH CONTEXT ORDERS
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
166. | ORWORDG ALLTREE | READ | - | 100.98 | 
167. | ORWORDG GRPSEQB | READ | PARAMETER | 100.98 | ORWOR CATEGORY SEQUENCE
168. | ORWORDG IEN | READ | IEN-LOOKUP |  | 
169. | ORWORDG MAPSEQ | READ | PARAMETER | 100.98 | 
170. | ORWORDG REVSTS | READ | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
171. | ORWPCE ACTIVE CODE | READ | - |  | 
172. | ORWPCE CPTMODS | READ | - |  | 
173. | ORWPCE DIAG | READ | HARD CODED, LOCATION |  | 
174. | ORWPCE GET DX TEXT | UTILITY | FMUTILITY |  | 
175. | ORWPCE GET EDUCATION TOPICS | READ | QUERY |  | 
176. | ORWPCE GET EXAM TYPE | READ | QUERY |  | 
177. | ORWPCE GET HEALTH FACTORS TY | READ | QUERY |  | 
178. | ORWPCE GET IMMUNIZATION TYPE | READ | QUERY |  | 
179. | ORWPCE GET SET OF CODES | READ | QUERY |  | 
180. | ORWPCE GET SKIN TEST TYPE | READ | QUERY |  | 
181. | ORWPCE GET TREATMENT TYPE | READ | QUERY |  | 
182. | ORWPCE GETMOD | READ | - |  | 
183. | ORWPCE HASCPT | READ | - |  | 
184. | ORWPCE HF | READ | LOCATION |  | 
185. | ORWPCE IMM | READ | LOCATION |  | 
186. | ORWPCE LEX | READ | - |  | 
187. | ORWPCE LEXCODE | READ | - |  | 
188. | ORWPCE PED | READ | LOCATION |  | 
189. | ORWPCE PROC | READ | LOCATION |  | 
190. | ORWPCE SK | READ | LOCATION |  | 
191. | ORWPCE TRT | READ | LOCATION |  | 
192. | ORWPCE VISIT | READ | LOCATION |  | 
193. | ORWPCE XAM | READ | LOCATION |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
194. | ORWPCE4 LEX | READ | QUERY |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
195. | ORWPS REASON | READ | PARAMETER |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
196. | ORWPS1 NEWDLG | READ | PARAMETER |  | 
197. | ORWPS1 PICKUP | READ | - | 550 | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
198. | __ORWPT CLINRNG__ | READ | ALLJS, HARD CODED, LOCATION, RPCLOCKER |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
199. | ORWRP COLUMN HEADERS | READ | - |  | 
200. | ORWRP LAB REPORT LISTS | READ | PARAMETER | 101.24 | ORWRP REPORT LAB LIST
201. | ORWRP REPORT LISTS | READ | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
202. | ORWRP16 REPORT LISTS | READ | - |  | 
203. | ORWRP16 REPORT TEXT | READ | UNSTRUCTURED READ |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
204. | ORWRP2 COMPABV | READ | - |  | 
205. | ORWRP2 COMPDISP | READ | - |  | 
206. | ORWRP2 HS COMP FILES | READ | - | 142.5 | 
207. | ORWRP2 HS COMPONENT SUBS | READ | - |  | 
208. | ORWRP2 HS COMPONENTS | READ | - |  | 
209. | ORWRP2 HS FILE LOOKUP | READ | - |  | 
210. | ORWRP2 HS SUBITEMS | READ | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
211. | ORWRP3 EXPAND COLUMNS | READ | PARAMETER |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
212. | ORWTPD GETIMG | UTILITY | - | 101.24 | 
213. | ORWTPD GETSETS | READ | - | 101.24 | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
214. | ORWTPN GETCLASS | READ | - | 8925.1 | 
215. | ORWTPN GETTC | READ | - | 8925.1 | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
216. | ORWTPR NOTDESC | READ | - |  | 
217. | ORWTPR OCDESC | READ | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
218. | ORWU DEVICE | READ | - |  | 
219. | ORWU PATCH | READ | - | 9.4 | 
220. | ORWU VERSION | READ | - | 9.4 | 
221. | ORWU VERSRV | READ | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
222. | ORWU16 DEVICE | READ | LIST | 3.5 | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
223. | ORWUL FV4DG | READ | QUERY | 101.44, 101.43 | 
224. | ORWUL FVIDX | READ | QUERY | 101.43 | 
225. | ORWUL FVSUB | READ | QUERY | 101.44 | 
226. | ORWUL QV4DG | READ | PARAMETER, QUERY |  | ORWDQ QUICK VIEW
227. | ORWUL QVIDX | READ | QUERY | 101.44 | 
228. | ORWUL QVSUB | READ | QUERY | 101.44 | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
229. | PXRM REMINDER CATEGORY | READ | - |  | 
230. | PXRM REMINDERS AND CATEGORIES | READ | QUERY |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
231. | TIU FIELD DELETE | __CHANGE__ | - | 8927.1 | 
232. | TIU FIELD EXPORT | READ | XML |  | 
233. | TIU FIELD IMPORT | __CHANGE__ | XML |  | 
234. | TIU FIELD LIST | READ | - | 8927.1 | 
235. | TIU FIELD LIST IMPORT | __CHANGE__ | REENTRANCY | 8927.1 | 
236. | TIU FIELD LOAD | READ | - |  | 
237. | TIU FIELD LOAD BY IEN | READ | - |  | 
238. | TIU FIELD NAME IS UNIQUE | READ | IS-A | 8927.1 | 
239. | TIU FIELD SAVE | __CHANGE__ | - | 8927.1 | 
240. | TIU GET BOILERPLATE | READ | - |  | 
241. | TIU GET DS URGENCIES | READ | HARD CODED |  | 
242. | TIU GET PRF TITLE | READ | - |  | 
243. | TIU GET PRINT NAME | READ | - |  | 
244. | TIU ID CAN ATTACH | READ | IS-A |  | 
245. | TIU IDENTIFY CLINPROC CLASS | READ | - |  | 
246. | TIU IDENTIFY CONSULTS CLASS | READ | IEN-LOOKUP |  | 
247. | TIU IDENTIFY SURGERY CLASS | READ | IEN-LOOKUP |  | 
248. | TIU IS THIS A CLINPROC? | READ | IS-A |  | 
249. | TIU IS THIS A CONSULT? | READ | IS-A |  | 
250. | TIU IS THIS A SURGERY? | READ | IS-A |  | 
251. | TIU ISPRF | READ | IEN-LOOKUP, IS-A |  | 
252. | TIU LONG LIST BOILERPLATED | READ | LIST | 8925.1 | 
253. | TIU LONG LIST CLINPROC TITLES | READ | LIST | 8925.1 | 
254. | TIU LONG LIST CONSULT TITLES | READ | LIST | 8925.1 | 
255. | TIU LONG LIST OF TITLES | READ | LIST | 8925.1 | 
256. | TIU LONG LIST SURGERY TITLES | READ | LIST | 8925.1 | 
257. | TIU REM DLG OK AS TEMPLATE | READ | DUZ FOR SERVICE, IS-A, PARAMETER | 801.41 | TIU TEMPLATE REMINDER DIALOGS
258. | TIU REMINDER DIALOGS | READ | DUZ FOR SERVICE, PARAMETER |  | TIU TEMPLATE REMINDER DIALOGS
259. | TIU TEMPLATE ALL TITLES | READ | - |  | 
260. | TIU TEMPLATE CHECK BOILERPLATE | UTILITY | - |  | 
261. | TIU TEMPLATE CREATE/MODIFY | __CHANGE__ | - |  | 
262. | TIU TEMPLATE DELETE | __CHANGE__ | - |  | 
263. | TIU TEMPLATE GET DEFAULTS | READ | PARAMETER |  | TIU DEFAULT TEMPLATES
264. | TIU TEMPLATE GET DESCRIPTION | READ | - |  | 
265. | TIU TEMPLATE GETBOIL | READ | - |  | 
266. | TIU TEMPLATE GETITEMS | READ | - |  | 
267. | TIU TEMPLATE GETLINK | READ | - |  | 
268. | TIU TEMPLATE GETPROOT | READ | - |  | 
269. | TIU TEMPLATE GETROOTS | READ | - |  | 
270. | TIU TEMPLATE GETTEXT | READ | - |  | 
271. | TIU TEMPLATE ISEDITOR | READ | - |  | 
272. | TIU TEMPLATE LISTOWNR | READ | - |  | 
273. | TIU TEMPLATE PERSONAL OBJECTS | READ | DUZ FOR SERVICE, PARAMETER |  | TIU TEMPLATE PERSONAL OBJECTS
274. | TIU TEMPLATE SET DEFAULTS | __CHANGE__ | PARAMETER |  | TIU DEFAULT TEMPLATES
275. | TIU TEMPLATE SET ITEMS | __CHANGE__ | - |  | 
276. | TIU USER CLASS LONG LIST | READ | - | 8930 | 


#### User (179)

Category | Number
--- | ---
CHANGE | 38 (21.2%)
READ | 130 (72.6%)
UTILITY | 11 (6.1%)

... many - 80 (44.7%) - involve PARAMETER setting or getting.

\# | Name | Category | Tags | Files | Parameters
--- | --- | --- | --- | --- | ---
1. | GMV USER | READ | PARAMETER |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
2. | ORB SORT METHOD | READ | PARAMETER |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
3. | ORECS01 SAVPATH | __CHANGE__ | PARAMETER |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
4. | OREVNTX1 AUTHMREL | READ | PARAMETER, XUSEC |  | 
5. | OREVNTX1 CMEVTS | READ | LOCATION, PARAMETER |  | 
6. | OREVNTX1 DELDFLT | __CHANGE__ | PARAMETER |  | 
7. | OREVNTX1 DFLTEVT | READ | PARAMETER |  | 
8. | OREVNTX1 SETDFLT | __CHANGE__ | PARAMETER | 100.5 | 
9. | OREVNTX1 TYPEXT | READ | - |  | 
10. | OREVNTX1 WRLSTED | READ | PARAMETER | 101.41 | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
11. | ORQORB SORT | READ | PARAMETER |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
12. | ORQPT DEFAULT CLINIC DATE RANG | READ | LOCATION, PARAMETER |  | 
13. | ORQPT DEFAULT LIST SORT | READ | PARAMETER |  | 
14. | ORQPT DEFAULT LIST SOURCE | READ | PARAMETER |  | 
15. | ORQPT PROVIDERS | READ | XREF, XUSEC | 200 | 
16. | ORQPT TEAMS | READ | - | 100.21 | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
17. | ORQQCN2 SAVE CONTEXT | __CHANGE__ | PARAMETER |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
18. | ORQQLR SEARCH RANGE OUTPT | READ | PARAMETER |  | ORQQLR SEARCH RANGE OUTPT
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
19. | ORQQPL INIT USER | READ | PARAMETER, REENTRANCY | 125.99 | ORCH CONTEXT PROBLEMS
20. | ORQQPL PROBLEM NTRT BULLETIN | UTILITY | BULLETIN, PARAMETER, XMB |  | OR PROBLEM NTRT BY DIVISION
21. | ORQQPL PROV FILTER LIST | READ | - |  | 
22. | ORQQPL PROVIDER LIST | READ | - |  | 
23. | ORQQPL SAVEVIEW | __CHANGE__ | PARAMETER | 200 | ORCH CONTEXT PROBLEMS
24. | ORQQPL USER PROB CATS | READ | REENTRANCY | 125.1, 200 | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
25. | ORQQPX GET DEF LOCATIONS | READ | PARAMETER |  | ORQQPX DEFAULT LOCATIONS
26. | ORQQPX GET FOLDERS | READ | PARAMETER |  | ORQQPX REMINDER FOLDERS
27. | ORQQPX NEW COVER SHEET ACTIVE | READ | IS-A, PARAMETER |  | ORQQPX NEW REMINDER PARAMS
28. | ORQQPX NEW COVER SHEET REMS | READ | PARAMETER |  | ORQQPX SEARCH ITEMS
29. | ORQQPX NEW REMINDERS ACTIVE | READ | IS-A, PARAMETER |  | PXRM GUI REMINDERS ACTIVE
30. | ORQQPX REM INSERT AT CURSOR | READ | PARAMETER |  | ORQQPX REMINDER TEXT AT CURSOR
31. | ORQQPX SET FOLDERS | __CHANGE__ | PARAMETER |  | ORQQPX REMINDER FOLDERS
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
32. | ORQQPXRM GET WH REPORT TEXT | READ | - | 790.1 | 
33. | ORQQPXRM PROGRESS NOTE HEADER | READ | LOCATION |  | PXRM PROGRESS NOTE HEADERS
34. | ORQQPXRM REMINDER CATEGORIES | READ | LOCATION |  | PXRM CPRS LOOKUP CATEGORIES
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
35. | ORQQVI2 VITALS VALIDATE | UTILITY | EXTERNAL I/F, HARD CODED, IS-A |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
36. | ORWCH LDFONT | READ | PARAMETER |  | ORWCH FONT SIZE
37. | ORWCH LOADALL | READ | PARAMETER |  | ORWCH BOUNDS, ORWCH WIDTHS, ORWCH COLUMNS
38. | ORWCH LOADSIZ | READ | PARAMETER |  | ORWCH BOUNDS
39. | ORWCH SAVEALL | __CHANGE__ | PARAMETER |  | ORWCH BOUNDS, ORWCH WIDTHS, ORWCH COLUMNS
40. | ORWCH SAVECOL | __CHANGE__ | PARAMETER |  | ORWCH COLUMNS REPORTS
41. | ORWCH SAVESIZ | __CHANGE__ | PARAMETER |  | ORWCH BOUNDS
42. | ORWCH SAVFONT | __CHANGE__ | PARAMETER |  | ORWCH FONT SIZE
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
43. | ORWCOM ORDEROBJ | READ | PARAMETER |  | ORWCOM PATIENT SELECTED
44. | ORWCOM PTOBJ | READ | PARAMETER |  | ORWCOM PATIENT SELECTED
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
45. | ORWD KEY | READ | XUSEC |  | 
46. | ORWD PROVKEY | READ | XUSEC |  | 
47. | ORWD SAVE | __CHANGE__ | - |  | 
48. | ORWD SAVEACT | __CHANGE__ | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
49. | ORWDAL32 CLINUSER | READ | IS-A, PARAMETER |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
50. | ORWDBA2 ADDPDL | __CHANGE__ | - | 200 | 
51. | ORWDBA2 DELPDL | __CHANGE__ | - |  | 
52. | ORWDBA2 GETPDL | READ | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
53. | ORWDBA4 GETBAUSR | READ | PARAMETER |  | OR BILLING AWARENESS BY USER
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
54. | ORWDBA7 ISWITCH | READ | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
55. | ORWDCSLT LOOK200 | READ | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
56. | ORWDLR32 IC DEFAULT | READ | LOCATION | 69.9 | 
57. | ORWDLR32 IMMED COLLECT | READ | LOCATION, UNSTRUCTURED READ |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
58. | ORWDLR33 LC TO WC | READ | LOCATION, PARAMETER |  | ORWLR LC CHANGED TO WC
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
59. | ORWDPS1 FAILDEA | UTILITY | FMUTILITY, IS-A | 101.43 | 
60. | ORWDPS1 IVDEA | READ | - | 200, 101.43 | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
61. | ORWDPS32 AUTH | READ | PARAMETER |  | OR OREMAS MED ORDERS
62. | ORWDPS32 AUTHNVA | READ | PARAMETER |  | OR OREMAS NON-VA MED ORDERS
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
63. | ORWDRA32 APPROVAL | READ | QUERY |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
64. | ORWDXM1 SVRPC | READ | IS-A, PARAMETER |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
65. | ORWDXVB STATALOW | READ | PARAMETER |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
66. | ORWGN AUTHUSR | READ | PARAMETER |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
67. | ORWGRPC ALLVIEWS | READ | - |  | 
68. | ORWGRPC DELVIEWS | __CHANGE__ | PARAMETER |  | 
69. | ORWGRPC PUBLIC | READ | PARAMETER |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
70. | ORWLRR ATG | READ | DUZ TO K/META | 60, 69.2, 68 | 
71. | ORWLRR TG | READ | - |  | 
72. | ORWLRR USERS | READ | QUERY | 68 | 
73. | ORWLRR UTGA | READ | QUERY |  | 
74. | ORWLRR UTGD | READ | QUERY |  | 
75. | ORWLRR UTGR | READ | QUERY |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
76. | ORWNSS NSSMSG | READ | PARAMETER |  | ORWIM NSS MESSAGE
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
77. | ORWOR PKIUSE | READ | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
78. | ORWOR1 GETDEA | READ | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
79. | ORWPCE ACTIVE PROV | READ | IS-A |  | 
80. | ORWPCE ALWAYS CHECKOUT | READ | IS-A, PARAMETER |  | ORWPCE DISABLE AUTO CHECKOUT
81. | ORWPCE ANYTIME | READ | PARAMETER |  | ORWPCE ANYTIME ENCOUNTERS
82. | ORWPCE ASKPCE | READ | PARAMETER |  | ORWPCE ASK ENCOUNTER UPDATE
83. | ORWPCE AUTO VISIT TYPE SELECT | READ | IS-A, PARAMETER |  | 
84. | ORWPCE FORCE | READ | LOCATION, PARAMETER |  | 
85. | ORWPCE GET EXCLUDED | READ | PARAMETER |  | 
86. | ORWPCE MH TEST AUTHORIZED | READ | PARAMETER |  | 
87. | ORWPCE MHTESTOK | READ | IS-A, PARAMETER |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
88. | ORWPT DFLTSRC | READ | PARAMETER |  | ORLP DEFAULT LIST SOURCE
89. | ORWPT SAVDFLT | __CHANGE__ | PARAMETER |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
90. | ORWRP2 SAVLKUP | __CHANGE__ | PARAMETER |  | ORWRP ADHOC LOOKUP
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
91. | ORWSR SAVE SURG CONTEXT | __CHANGE__ | PARAMETER |  | ORCH CONTEXT SURGERY
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
92. | ORWTIU CANLINK | READ | - |  | 
93. | ORWTIU GET DCSUMM CONTEXT | READ | PARAMETER |  | ORCH CONTEXT SUMMRIES
94. | ORWTIU GET TIU CONTEXT | READ | PARAMETER |  | ORCH CONTEXT NOTES
95. | ORWTIU SAVE DCSUMM CONTEXT | __CHANGE__ | PARAMETER |  | ORCH CONTEXT SUMMRIES
96. | ORWTIU SAVE TIU CONTEXT | __CHANGE__ | PARAMETER |  | ORCH CONTEXT NOTES
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
97. | ORWTPD ACTDF | __CHANGE__ | PARAMETER |  | 
98. | ORWTPD DELDFLT | __CHANGE__ | PARAMETER |  | 
99. | ORWTPD GETDFLT | READ | PARAMETER |  | ORWRP TIME/OCC LIMITS ALL
100. | ORWTPD PUTOCM | __CHANGE__ | PARAMETER |  | 
101. | ORWTPD SUDF | __CHANGE__ | PARAMETER |  | 
102. | ORWTPD SUINDV | __CHANGE__ | PARAMETER |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
103. | ORWTPD1 GETCSRNG | READ | PARAMETER |  | ORQQCSDR CS RANGE START, ORQQCSDR CS RANGE STOP
104. | ORWTPD1 GETEDATS | READ | PARAMETER |  | ORQQEAPT ENC APPT START, ORQQEAPT ENC APPT STOP
105. | ORWTPD1 PUTCSRNG | __CHANGE__ | PARAMETER |  | 
106. | ORWTPD1 PUTEDATS | __CHANGE__ | PARAMETER |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
107. | ORWTPP ADDLIST | READ | - | 100.21 | 
108. | ORWTPP CHKSURR | READ | PARAMETER |  | 
109. | ORWTPP CLDAYS | READ | PARAMETER |  | 
110. | ORWTPP CLEARNOT | __CHANGE__ | - | 8992.1 | 
111. | ORWTPP CLRANGE | READ | PARAMETER |  | 
112. | ORWTPP CSARNG | READ | PARAMETER |  | 
113. | ORWTPP CSLAB | READ | PARAMETER |  | 
114. | ORWTPP DELLIST | READ | - | 100.21 | 
115. | ORWTPP GETCOMBO | READ | - |  | 
116. | ORWTPP GETCOS | READ | - |  | 
117. | ORWTPP GETDCOS | READ | - |  | 
118. | ORWTPP GETIMG | READ | - |  | 
119. | ORWTPP GETNOT | READ | - |  | 
120. | ORWTPP GETNOTO | READ | - |  | 
121. | ORWTPP GETOC | READ | - |  | 
122. | ORWTPP GETOTHER | READ | - |  | 
123. | ORWTPP GETREM | READ | - |  | 
124. | ORWTPP GETSUB | READ | - |  | 
125. | ORWTPP GETSURR | READ | - |  | 
126. | ORWTPP GETTD | READ | - |  | 
127. | ORWTPP GETTU | READ | - |  | 
128. | ORWTPP LSDEF | READ | - |  | 
129. | ORWTPP NEWLIST | READ | - |  | 
130. | ORWTPP PLISTS | READ | - | 100.21 | 
131. | ORWTPP PLTEAMS | READ | - | 100.21 | 
132. | ORWTPP REMLIST | __CHANGE__ | - |  | 
133. | ORWTPP SAVECD | __CHANGE__ | - |  | 
134. | ORWTPP SAVECS | __CHANGE__ | - |  | 
135. | ORWTPP SAVELIST | __CHANGE__ | - |  | 
136. | ORWTPP SAVENOT | __CHANGE__ | - |  | 
137. | ORWTPP SAVENOTO | __CHANGE__ | - |  | 
138. | ORWTPP SAVEOC | __CHANGE__ | - |  | 
139. | ORWTPP SAVEPLD | __CHANGE__ | - |  | 
140. | ORWTPP SAVESURR | __CHANGE__ | - |  | 
141. | ORWTPP SAVET | __CHANGE__ | - |  | 
142. | ORWTPP SETCOMBO | UTILITY | - |  | 
143. | ORWTPP SETDCOS | UTILITY | - |  | 
144. | ORWTPP SETIMG | UTILITY | - |  | 
145. | ORWTPP SETOTHER | UTILITY | - |  | 
146. | ORWTPP SETREM | UTILITY | - |  | 
147. | ORWTPP SETSUB | UTILITY | - |  | 
148. | ORWTPP SORTDEF | READ | - |  | 
149. | ORWTPP TEAMS | READ | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
150. | ORWTPT GETTEAM | READ | - | 100.21 | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
151. | ORWU DEFAULT DIVISION | READ | LOCATION |  | 
152. | ORWU HAS OPTION ACCESS | READ | - |  | 
153. | ORWU HASKEY | READ | - |  | 
154. | ORWU NEWPERS | READ | - |  | 
155. | ORWU PARAM | READ | PARAMETER |  | 
156. | ORWU PARAMS | READ | PARAMETER |  | 
157. | ORWU TOOLMENU | READ | PARAMETER |  | 
158. | ORWU USERINFO | READ | - |  | 
159. | ORWU VALIDSIG | UTILITY | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
160. | ORWU1 NAMECVT | READ | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
161. | ORWU16 NEWPERS | READ | QUERY |  | 
162. | ORWU16 USERINFO | READ | - |  | 
163. | ORWU16 VALIDSIG | UTILITY | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
164. | TIU AUTHORIZATION | READ | IS-A |  | 
165. | TIU CAN CHANGE COSIGNER? | READ | IS-A |  | 
166. | TIU DIV AND CLASS INFO | READ | - | 200, 8930 | 
167. | TIU FIELD CAN EDIT | READ | IS-A |  | 
168. | TIU GET DEFAULT PROVIDER | READ | - |  | 
169. | TIU GET DS TITLES | READ | DUZ TO K/META | 8925.98, 8925.1 | 
170. | TIU GET LIST OF OBJECTS | READ | - |  | 
171. | TIU GET PERSONAL PREFERENCES | READ | - |  | 
172. | TIU GET PN TITLES | READ | DUZ TO K/META | 8925.98, 8925.1 | 
173. | TIU IS USER A PROVIDER? | READ | IS-A |  | 
174. | TIU IS USER A USR PROVIDER | READ | IS-A |  | 
175. | TIU LOAD BOILERPLATE TEXT | READ | ASSEMBLY | 8925.1 | 
176. | TIU PERSONAL TITLE LIST | READ | DUZ TO K/META | 8925.1 | 
177. | TIU REQUIRES COSIGNATURE | READ | IS-A |  | 
178. | TIU TEMPLATE ACCESS LEVEL | READ | PARAMETER |  | TIU PERSONAL TEMPLATE ACCESS, TIU TEMPLATE ACCESS BY CLASS
179. | TIU USER INACTIVE? | READ | IS-A |  | 


#### Other (100)

Category | Number
--- | ---
CHANGE | 6 (6%)
READ | 53 (53%)
UTILITY | 41 (41%)

\# | Name | Category | Tags
--- | --- | --- | ---
\# | Name | Category | Tags | Files | Parameters
--- | --- | --- | --- | --- | ---
1. | __GMV CONVERT DATE__ | UTILITY | ALLJS, HARD CODED, RPCLOCKER |  | 
2. | GMV DLL VERSION | READ | PARAMETER |  | 
3. | __GMV GET CURRENT TIME__ | UTILITY | ALLJS, HARD CODED, RPCLOCKER |  | 
4. | GMV LOCATION SELECT | UTILITY | DYNAMIC EXECUTE |  | 
5. | GMV MANAGER | UTILITY | DYNAMIC EXECUTE, SECURITY HOLE |  | 
6. | GMV PARAMETER | __CHANGE__ | PARAMETER |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
7. | ORECS01 GETDIV | READ | GLOBAL |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
8. | ORIMO ISCLOC | READ | IS-A, LOCATION |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
9. | ORPRF CLEAR | UTILITY | REENTRANCY |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
10. | __ORQ NULL LIST__ | UTILITY | ALLJS, HARD CODED, RPCLOCKER |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
11. | ORQPT CLINICS | READ | LOCATION, PARAMETER |  | 
12. | ORQPT KILL RPL | UTILITY | HARD CODED, REENTRANCY |  | 
13. | ORQPT WARDS | READ | LOCATION | 42 | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
14. | ORQQCN2 GET CONTEXT | READ | PARAMETER |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
15. | ORQQPL CLIN FILTER LIST | READ | IEN-LOOKUP, LOCATION |  | 
16. | ORQQPL CLIN SRCH | READ | LOCATION |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
17. | ORQQPX GET HIST LOCATIONS | READ | LOCATION | 9999999.06 | 
18. | ORQQPX SAVELVL | __CHANGE__ | PARAMETER |  | ORQQPX COVER SHEET REM CLASSES, ORQQPX COVER SHEET REMINDERS
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
19. | ORQQVI2 VITALS RATE CHECK | UTILITY | HARD CODED, IS-A |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
20. | ORWCIRN AUTORDV | READ | PARAMETER |  | ORWRP CIRN AUTOMATIC
21. | ORWCIRN HDRON | READ | PARAMETER |  | ORWRP HDR ON
22. | ORWCIRN WEBADDR | READ | HARD CODED, PARAMETER |  | ORWRP VISTAWEB ADDRESS
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
23. | ORWD DT | UTILITY | HARD CODED |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
24. | ORWDBA1 BASTATUS | READ | PARAMETER |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
25. | ORWDFH NFSLOC READY | READ | IS-A, LOCATION |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
26. | ORWDLR STOP | UTILITY | HARD CODED |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
27. | ORWDLR32 GET LAB TIMES | READ | PARAMETER |  | 
28. | ORWDLR32 IC VALID | UTILITY | FMUTILITY, IS-A | 69.9 | 
29. | ORWDLR32 LAB COLL TIME | UTILITY | IS-A, PARAMETER |  | 
30. | ORWDLR32 MAXDAYS | UTILITY | LOCATION, PARAMETER |  | 
31. | ORWDLR32 STOP | UTILITY | HARD CODED |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
32. | ORWDLR33 FUTURE LAB COLLECTS | READ | LOCATION, PARAMETER |  | LR LAB COLLECT FUTURE
33. | ORWDLR33 LASTTIME | UTILITY | REENTRANCY |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
34. | ORWDOR VALNUM | UTILITY | HARD CODED |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
35. | ORWDPS1 LOCPICK | READ | LOCATION, PARAMETER |  | ORWDPS ROUTING DEFAULT
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
36. | ORWDPS2 DAY2QTY | UTILITY | HARD CODED |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
37. | ORWDPS32 VALQTY | UTILITY | HARD CODED, IS-A |  | 
38. | ORWDPS32 VALRATE | UTILITY | HARD CODED, IS-A |  | 
39. | ORWDPS32 VALSCH | UTILITY | HARD CODED, IS-A |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
40. | ORWDRA32 LOCTYPE | READ | LOCATION |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
41. | ORWDXC ON | READ | IS-A, PARAMETER |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
42. | ORWDXM MSTYLE | READ | PARAMETER |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
43. | ORWDXVB NURSADMN | READ | PARAMETER |  | OR VBECS SUPPRESS NURS ADMIN
44. | ORWDXVB VBTNS | READ | PARAMETER |  | ORWDXVB VBECS TNS CHECK
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
45. | ORWDXVB3 COLLTIM | READ | PARAMETER |  | OR VBECS REMOVE COLL TIME
46. | ORWDXVB3 SWPANEL | READ | PARAMETER |  | OR VBECS DIAGNOSTIC PANEL 1ST
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
47. | ORWGN GNLOC | READ | IS-A, PARAMETER |  | OR GN LOCATIONS
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
48. | ORWGRPC GETDATES | UTILITY | PARAMETER | 101.24 | ORWRP TIME/OCC LIMITS INDV
49. | ORWGRPC GETPREF | UTILITY | FMUTILITY, PARAMETER |  | 
50. | ORWGRPC GETSIZE | UTILITY | FMUTILITY, PARAMETER |  | 
51. | ORWGRPC GETVIEWS | UTILITY | FMUTILITY, PARAMETER |  | 
52. | ORWGRPC SETPREF | __CHANGE__ | PARAMETER |  | 
53. | ORWGRPC SETSIZE | __CHANGE__ | PARAMETER |  | 
54. | ORWGRPC SETVIEWS | __CHANGE__ | PARAMETER |  | 
55. | ORWGRPC TESTING | UTILITY | HARD CODED |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
56. | ORWLEX GETFREQ | UTILITY | HARD CODED |  | 
57. | ORWLEX GETI10DX | UTILITY | FMUTILITY |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
58. | ORWLR REPORT LISTS | UTILITY | FMUTILITY |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
59. | ORWNSS CHKSCH | UTILITY | HARD CODED |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
60. | ORWOR EXPIRED | UTILITY | PARAMETER |  | ORWOR EXPIRED ORDERS
61. | ORWOR PKISITE | READ | LOCATION |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
62. | ORWORB GETSORT | READ | PARAMETER |  | 
63. | ORWORB SETSORT | __CHANGE__ | PARAMETER |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
64. | ORWPCE GAFURL | READ | ALLJS, HARD CODED |  | 
65. | ORWPCE GETSVC | UTILITY | LOCATION |  | 
66. | ORWPCE ISCLINIC | READ | IS-A, LOCATION |  | 
67. | ORWPCE MHCLINIC | READ | IS-A, LOCATION |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
68. | ORWPCE1 NONCOUNT | READ | IS-A, LOCATION |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
69. | __ORWPT16 PSCNVT__ | READ | ALLJS, HARD CODED, RPCLOCKER |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
70. | ORWRA DEFAULT EXAM SETTINGS | READ | PARAMETER |  | ORCH CONTEXT REPORTS
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
71. | ORWRP2 GETLKUP | READ | PARAMETER |  | ORWRP ADHOC LOOKUP
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
72. | ORWSR GET SURG CONTEXT | READ | PARAMETER |  | ORCH CONTEXT SURGERY
73. | ORWSR SHOW OPTOP WHEN SIGNING | READ | HARD CODED |  | 
74. | ORWSR SHOW SURG TAB | READ | PARAMETER |  | ORWOR SHOW SURGERY TAB
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
75. | ORWTPD GETOCM | READ | PARAMETER |  | ORCH CONTEXT MEDS
76. | ORWTPD RSDFLT | READ | PARAMETER |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
77. | ORWTPD1 GETCSDEF | READ | PARAMETER |  | ORQQCSDR CS RANGE START, ORQQCSDR CS RANGE STOP
78. | ORWTPD1 GETEAFL | READ | PARAMETER |  | ORQQEAFL ENC APPT FUTURE LIMIT
79. | ORWTPD1 GETEFDAT | READ | PARAMETER |  | ORQQEAPT ENC APPT START, ORQQEAPT ENC APPT STOP
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
80. | ORWTPO CSARNGD | READ | PARAMETER |  | ORQQCSDR CS RANGE START, ORQQCSDR CS RANGE STOP
81. | ORWTPO CSLABD | READ | PARAMETER |  | 
82. | ORWTPO GETIMGD | READ | PARAMETER |  | 
83. | ORWTPO GETTABS | READ | PARAMETER | 8989.51 | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
84. | ORWU CLINLOC | READ | LOCATION |  | 
85. | __ORWU DT__ | UTILITY | ALLJS, HARD CODED, RPCLOCKER |  | 
86. | ORWU EXTNAME | UTILITY | FMUTILITY |  | 
87. | ORWU GBLREF | UTILITY | FMUTILITY |  | 
88. | ORWU GENERIC | UTILITY | FMUTILITY |  | 
89. | ORWU HOSPLOC | READ | LOCATION |  | 
90. | ORWU INPLOC | READ | LOCATION |  | 
91. | __ORWU VALDT__ | UTILITY | ALLJS, HARD CODED, RPCLOCKER |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
92. | ORWU1 NEWLOC | READ | LOCATION |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
93. | ORWU16 HOSPLOC | READ | LOCATION, QUERY |  | 
94. | ORWU16 VALDT | UTILITY | HARD CODED |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
95. | ORWUH POPUP | READ | PARAMETER |  | ORWUH WHATSTHIS
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
96. | ORWUX SYMTAB | UTILITY | HARD CODED |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
97. | TIU FIELD CHECK | UTILITY | HARD CODED |  | 
98. | TIU FIELD DOLMTEXT | UTILITY | FMUTILITY |  | 
99. | TIU FIELD LIST ADD | UTILITY | REENTRANCY |  | 
100. | TIU GET SITE PARAMETERS | READ | LOCATION |  | 





## Authentication (18)

\# | Name
--- | ---
1. | DG SENSITIVE RECORD ACCESS
2. | ORWU NPHASKEY
3. | __XUS AV CODE__
4. | XUS AV HELP
5. | XUS CCOW VAULT PARAM
6. | XUS CVC
7. | XUS DIVISION GET
8. | XUS DIVISION SET
9. | XUS GET CCOW TOKEN
10. | XUS GET TOKEN
11. | XUS GET USER INFO
12. | XUS INTRO MSG
13. | XUS PKI GET UPN
14. | XUS PKI SET UPN
15. | __XUS SIGNON SETUP__
16. | XWB CREATE CONTEXT
17. | XWB GET BROKER INFO
18. | __XWB IM HERE__



## Out of Scope (60)

\# | Name | Category | Tags
--- | --- | --- | ---
1. | MAG4 REMOTE IMPORT | CHANGE | DFN
2. | ORECS01 CHKESSO | UTILITY | PATCH
3. | ORECS01 ECPRINT | UTILITY | PRINT, REPORT
4. | ORECS01 ECRPT | UTILITY | PRINT, REPORT
5. | ORQQCN PRINT SF513 | UTILITY | PRINT
6. | ORQQCN SF513 WINDOWS PRINT | UTILITY | PRINT
7. | ORQQPX GET NOT PURPOSE | READ | NOT OSEHRA
8. | ORQQPXRM GET WH LETTER TYPE | READ | NOT OSEHRA
9. | ORQQPXRM GET WH PROC RESULT | READ | NOT OSEHRA
10. | ORQQPXRM MST UPDATE | CHANGE | DEPRECATED
11. | ORVW FACLIST | UTILITY | DFN, LOCATION, MPI
12. | ORWCIRN CHECKLINK | UTILITY | HL7
13. | ORWCIRN FACLIST | UTILITY | DFN, LOCATION, MPI
14. | ORWCS PRINT REPORT | UTILITY | PRINT
15. | ORWD1 PARAM | READ | PARAMETER, PRINT
16. | ORWD1 PRINTGUI | UTILITY | PRINT
17. | ORWD1 RVPRINT | UTILITY | PRINT
18. | ORWD1 SVONLY | UTILITY | PRINT
19. | ORWD2 MANUAL | READ | PRINT
20. | ORWDLR OIPARAM | READ | DEPRECATED
21. | ORWDPS1 CHK94 | UTILITY | IS-A, PATCH
22. | ORWDPS5 LESAPI | READ | DFN, NOT OSEHRA
23. | ORWDX SENDP | CHANGE | DFN, PRINT
24. | ORWDX1 UNDCORIG | CHANGE | BUG, DFN
25. | ORWGEPT CLINRNG | READ | NOT OSEHRA
26. | ORWMHV MHV | UTILITY | -
27. | ORWPCE GAFOK | READ | IS-A, PATCH
28. | ORWPCE HNCOK | READ | IS-A, PATCH
29. | ORWPCE I10IMPDT | READ | PATCH
30. | ORWPCE ICDVER | READ | PATCH
31. | ORWPCE LOADGAF | READ | DEPRECATED, DFN
32. | ORWPCE SAVEGAF | CHANGE | DEPRECATED, DFN
33. | ORWPFSS IS PFSS ACTIVE? | READ | IS-A, PATCH
34. | ORWPT LEGACY | UTILITY | DFN, REMOTE
35. | ORWRA PRINT REPORT | UTILITY | PRINT
36. | ORWRP GET DEFAULT PRINTER | UTILITY | PRINT
37. | ORWRP PRINT LAB REMOTE | UTILITY | PRINT
38. | ORWRP PRINT LAB REPORTS | UTILITY | PRINT
39. | ORWRP PRINT REMOTE REPORT | UTILITY | PRINT
40. | ORWRP PRINT REPORT | UTILITY | PRINT
41. | ORWRP PRINT V REPORT | UTILITY | PRINT
42. | ORWRP PRINT WINDOWS LAB REMOTE | UTILITY | PRINT
43. | ORWRP PRINT WINDOWS REMOTE | UTILITY | PRINT
44. | ORWRP PRINT WINDOWS REPORT | UTILITY | PRINT
45. | ORWRP SAVE DEFAULT PRINTER | CHANGE | PRINT
46. | ORWRP WINPRINT DEFAULT | UTILITY | PRINT
47. | ORWRP WINPRINT LAB REPORTS | UTILITY | PRINT
48. | ORWTIU IDNOTES INSTALLED | READ | IS-A, PATCH
49. | ORWTIU WINPRINT NOTE | UTILITY | PRINT
50. | ORWUXT LST | READ | HARD CODED
51. | ORWUXT REF | READ | HARD CODED
52. | ORWUXT VAL | READ | HARD CODED
53. | TIU PRINT RECORD | UTILITY | PRINT
54. | XWB DEFERRED CLEARALL | UTILITY | REENTRANT, REMOTE
55. | XWB DIRECT RPC | UTILITY | HL7, REMOTE
56. | XWB GET VARIABLE VALUE | UTILITY | GLOBAL, JLV, SECURITY HOLE
57. | XWB REMOTE CLEAR | UTILITY | REENTRANT, REMOTE
58. | XWB REMOTE GETDATA | UTILITY | REMOTE
59. | XWB REMOTE RPC | UTILITY | HL7, REMOTE
60. | XWB REMOTE STATUS CHECK | UTILITY | HL7, REMOTE


