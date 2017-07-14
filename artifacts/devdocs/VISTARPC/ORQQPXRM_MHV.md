---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORQQPXRM MHV<br/>
# ORQQPXRM MHV



## Properties

Property | Value
--- | ---
Label | MHV
Routine | [ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL |  | true | 
NAME | LITERAL |  | true | 
ANS | LITERAL |  | true | 



## MUMPS Method Description

Property | Value
--- | ---
Method | [MHV^ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html)
Input Parameters | DFN, NAME, ANS
Code | {::nomarkdown}<pre><code> N ORDATA,ORES,X<br/> S ORY(0)=0<br/> I '$$PATCH^XPDUTL("YS*5.01*85") S ORY(0)=2 Q<br/> I '$L(ANS) Q<br/> S ORES("DFN")=DFN,ORES("CODE")=NAME<br/> F X=1:1:$L(ANS) I $E(ANS,X)'="X" D<br/> .;I $E(ANS,X)="T" S $E(ANS,X)=1<br/> .;I $E(ANS,X)="F" S $E(ANS,X)=2<br/> .S ORES(X)=X_U_$E(ANS,X)<br/> D CHECKCR^YTQPXRM4(.ORDATA,.ORES)<br/> I $G(ORDATA(2))="OK" S ORY(0)=1 Q<br/> S ORY(1)=$P($G(ORDATA(2)),U,2)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rReminders.pas">rReminders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}