---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWPCE GET EXCLUDED<br/>
# ORWPCE GET EXCLUDED

Returns a list of excluded PCE entries

## Properties

Property | Value
--- | ---
Label | EXCLUDED
MUMPS Implementation | [ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
LOC | LITERAL |  |  | Location
TYPE | LITERAL |  |  | Excluded PCE data items are stored in one of five parameters.Type dictates the parameter this call will retrieve. Type  Parameter  1    ORWPCE EXCLUDE IMMUNIZATIONS  2    ORWPCE EXCLUDE SKIN TESTS  3    ORWPCE EXCLUDE PATIENT ED  4    ORWPCE EXCLUDE HEALTH FACTORS  5    ORWPCE EXCLUDE EXAMS



## MUMPS Method Description

Property | Value
--- | ---
Method | [EXCLUDED^ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
Method Comment | Returns list of excluded PCE data elements
Input Parameters | LOC, TYPE
Code | {::nomarkdown}<pre><code> N SRV,PARAM<br/> S PARAM=$S(TYPE=1:"IMMUNIZATIONS",TYPE=2:"SKIN TESTS",TYPE=3:"PATIENT ED",TYPE=4:"HEALTH FACTORS",TYPE=5:"EXAMS",1:"")<br/> Q:PARAM=""<br/> S SRV=$P($G(^VA(200,DUZ,5)),U)<br/> S PARAM="ORWPCE EXCLUDE "_PARAM<br/> D GETLST^XPAR(.ORY,"USR^LOC.`"_$G(LOC)_"^SRV.`"_+$G(SRV)_"^DIV^SYS^PKG",PARAM,"Q",.ORERR)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Encounter/rPCE.pas">Encounter/rPCE.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}