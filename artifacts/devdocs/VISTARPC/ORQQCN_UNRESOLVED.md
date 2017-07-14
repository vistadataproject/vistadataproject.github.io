---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORQQCN UNRESOLVED<br/>
# ORQQCN UNRESOLVED

Returns 1 if current user has unresolved consults for current patient, 0 if not.

## Properties

Property | Value
--- | ---
Label | UNRSLVD
Routine | [ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PATIENT DFN | LITERAL | 32 | true | 



## MUMPS Method Description

Property | Value
--- | ---
Method | [UNRSLVD^ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html)
Method Comment | Returns true if unresolved consults for user/pt
Input Parameters | ORDFN
First Comment | {::nomarkdown}<pre><code>S ORY=0<br/>Q:+$$GET^XPAR("ALL","ORWOR SHOW CONSULTS",1,"I")=0<br/>S ORY=+$$ANYPENDG^GMRCTIU(ORDFN,DUZ)   ;DBIA #3473<br/>Q</code></pre>{:/}
Code | {::nomarkdown}<pre><code> S $P(ORY,U,1)=+$$ANYPENDG^GMRCTIU(ORDFN,DUZ)   ;DBIA #3473<br/> S $P(ORY,U,2)=+$$GET^XPAR("ALL","ORWOR SHOW CONSULTS",1,"I")</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Consults/rConsults.pas">Consults/rConsults.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}