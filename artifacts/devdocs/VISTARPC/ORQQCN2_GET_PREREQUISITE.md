---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORQQCN2 GET PREREQUISITE<br/>
# ORQQCN2 GET PREREQUISITE

Returns resolved boilerplate form CONSULT SERIVCES file (123.5) reflectingthe service's prerequisites for ordering a consult.

## Properties

Property | Value
--- | ---
Label | PREREQ
MUMPS Implementation | [ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
Service IEN | LITERAL | 16 | true | Service IEN in file 123.5.
Patient ID | LITERAL | 32 | true | Patient DFN.



## MUMPS Method Description

Property | Value
--- | ---
Method | [PREREQ^ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html)
Method Comment | Returns prequisites for ordering
Input Parameters | ORSVC, ORDFN
Code | {::nomarkdown}<pre><code> Q:(+$G(ORSVC)=0)!(+$G(ORDFN)=0)<br/> S ORY=$NA(^TMP("ORPREREQ",$J))<br/> D PREREQ^GMRCUTL1(.ORY,ORSVC,ORDFN,0)  ;0=RESOLVE OBJECTS<br/> K @ORY@(0)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Consults/rConsults.pas">Consults/rConsults.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}