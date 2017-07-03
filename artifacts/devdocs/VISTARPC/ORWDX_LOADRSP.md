---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWDX LOADRSP
# ORWDX LOADRSP



Property | Value
--- | ---
Label | LOADRSP
Routine | [ORWDX](http://code.osehra.org/dox/Routine_ORWDX_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
RSPID | LITERAL |  |  | 
TRANS | LITERAL |  |  | 



### MUMPS Method Description

Property | Value
--- | ---
Method | [LOADRSP^ORWDX](http://code.osehra.org/dox/Routine_ORWDX_source.html)
Method Comment | Load responses from 101.41 or 100
Input Parameters | RSPID, TRANS
First Comment | {::nomarkdown}<pre><code> RSPID:  C123456;1-3243 = cached copy,   134-3234 = cached quick<br/>         X123456;1      = change order,  134      = quick dialog</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N I,J,DLG,INST,ID,VAL,ILST,ROOT,ORLOC S ROOT=""<br/> K ^TMP($J,"ORWDX LOADRSP","QO SAVE")<br/> I +RSPID=$P(RSPID,"-",1) D<br/> .S ^TMP($J,"ORWDX LOADRSP","QO SAVE")=+RSPID<br/> I RSPID["-" S ROOT="^TMP(""ORWDXMQ"",$J,"""_RSPID_""")" G XROOT^ORWDX2<br/> I $E(RSPID)="X" S ROOT="^OR(100,"_+$P(RSPID,"X",2)_",4.5)"  G XROOT^ORWDX2<br/> I +RSPID=RSPID  S ROOT="^ORD(101.41,"_+RSPID_",6)" G XROOT^ORWDX2<br/> Q:ROOT=""<br/> G XROOT^ORWDX2</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODBase.pas">Orders/rODBase.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}