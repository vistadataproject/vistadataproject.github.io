---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORQQPL SAVEVIEW
# ORQQPL SAVEVIEW

Saves preferred view (inpatient/outpatient) and list of preferredclinics/services to NEW PERSON file, field 125.nn.  Also sets value ofparameter [ORCH CONTEXT PROBLEMS], which controls the default status ofthe problems shown, as well as whether comments should be displayed.Preferences take effect for both GUI and List Manager, and can be changedfrom either interface.

Property | Value
--- | ---
Label | SAVEVIEW
Routine | [ORQQPL2](http://code.osehra.org/dox/Routine_ORQQPL2_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
GMPLVIEW | LITERAL | 64 | true | See field 125.nn of the NEW PERSON file for format of the first piece,related to inpatient/outpatient and clinics/services. Piece 2 is in the format &#x27;a;b;c;d&#x27;. The first two &#x27;;&#x27; pieces are ignored.The third piece represents the status of the problems to be displayed(A,I,R,B) for Active, Inactive, Removed, and Both Active/Inactive.  The4th &#x27;;&#x27; piece is a 1 to show comments, and a 0 to hide comments.  Seeparameter ORCH CONTEXT PROBLEMS for description.



### MUMPS Method Description

Property | Value
--- | ---
Method | [SAVEVIEW^ORQQPL2](http://code.osehra.org/dox/Routine_ORQQPL2_source.html)
Method Comment | save new view in File #200/Field #125
Input Parameters | GMPLVIEW
Code | {::nomarkdown}<pre><code> N TMP<br/> Q:'$D(GMPLVIEW)<br/> S TMP=$P($G(^VA(200,DUZ,125)),U,2,999)<br/> S ^VA(200,DUZ,125)=$P(GMPLVIEW,U,1)_U_TMP<br/> S TMP=$$GET^XPAR(DUZ_";VA(200,","ORCH CONTEXT PROBLEMS",1)<br/> I TMP'="" D  Q<br/> . D CHG^XPAR(DUZ_";VA(200,","ORCH CONTEXT PROBLEMS",1,$P(GMPLVIEW,U,2))<br/> D ADD^XPAR(DUZ_";VA(200,","ORCH CONTEXT PROBLEMS",1,$P(GMPLVIEW,U,2))</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rProbs.pas">rProbs.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}