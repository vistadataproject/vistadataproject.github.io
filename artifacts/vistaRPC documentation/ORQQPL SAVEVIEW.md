---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQPL SAVEVIEW 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPL SAVEVIEW{:/}
 tag | {::nomarkdown}SAVEVIEW{:/}
 routine | [ORQQPL2](http://code.osehra.org/dox/Routine_ORQQPL2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Saves preferred view (inpatient/outpatient) and list of preferredclinics/services to NEW PERSON file, field 125.nn.  Also sets value ofparameter [ORCH CONTEXT PROBLEMS], which controls the default status ofthe problems shown, as well as whether comments should be displayed.Preferences take effect for both GUI and List Manager, and can be changedfrom either interface.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}GMPLVIEW{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}64{:/} | {::nomarkdown}true{:/} | {::nomarkdown}See field 125.nn of the NEW PERSON file for format of the first piece,related to inpatient/outpatient and clinics/services. Piece 2 is in the format 'a;b;c;d'. The first two ';' pieces are ignored.The third piece represents the status of the problems to be displayed(A,I,R,B) for Active, Inactive, Removed, and Both Active/Inactive.  The4th ';' piece is a 1 to show comments, and a 0 to hide comments.  Seeparameter ORCH CONTEXT PROBLEMS for description.{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | SAVEVIEW^[ORQQPL2](http://code.osehra.org/dox/Routine_ORQQPL2_source.html)
 Method comment | save new view in File #200/Field #125
 Input parameters | {::nomarkdown}GMPLVIEW{:/}
 Code | {::nomarkdown}  N TMP<br> Q:'$D(GMPLVIEW)<br> S TMP=$P($G(^VA(200,DUZ,125)),U,2,999)<br> S ^VA(200,DUZ,125)=$P(GMPLVIEW,U,1)_U_TMP<br> S TMP=$$GET^XPAR(DUZ_";VA(200,","ORCH CONTEXT PROBLEMS",1)<br> I TMP'="" D  Q<br> . D CHG^XPAR(DUZ_";VA(200,","ORCH CONTEXT PROBLEMS",1,$P(GMPLVIEW,U,2))<br> D ADD^XPAR(DUZ_";VA(200,","ORCH CONTEXT PROBLEMS",1,$P(GMPLVIEW,U,2)){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rProbs.pas">rProbs.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 5:08:31 am</p>{:/}