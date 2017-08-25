---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWPCE FORCE<br/>
# ORWPCE FORCE

Returns the value of the ORWPCE FORCE GUI PCE ENTRY parameter.

## Properties

Property | Value
--- | ---
Label | FORCE
MUMPS Implementation | [ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
USER | LITERAL |  |  | The user to check the parameter for.
LOC | LITERAL |  |  | Location to use in checking the parameter.



## MUMPS Method Description

Property | Value
--- | ---
Method | [FORCE^ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
Method Comment | Retrieve FORCE GUI PCE Entry for a given User/Location
Input Parameters | USER, LOC
Code | {::nomarkdown}<pre><code> N SRV,ORTMP,ORERR<br/> S USER=$G(USER,DUZ)<br/> S SRV=$P($G(^VA(200,USER,5)),U)<br/> D GETLST^XPAR(.ORTMP,"USR^LOC.`"_$G(LOC)_"^SRV.`"_+$G(SRV)_"^DIV^SYS^PKG","ORWPCE FORCE PCE ENTRY","Q",.ORERR)<br/> S ORY=+$P($G(ORTMP(1)),U,2)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Encounter/rPCE.pas">Encounter/rPCE.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}