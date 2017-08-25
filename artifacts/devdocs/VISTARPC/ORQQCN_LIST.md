---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORQQCN LIST<br/>
# ORQQCN LIST

Returns a list of consult requests for a patient within optional date rangeand optional service.

## Properties

Property | Value
--- | ---
Label | LIST
MUMPS Implementation | [ORQQCN](http://code.osehra.org/dox/Routine_ORQQCN_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PATIENT | LITERAL | 16 | true | Patient DFN from File #2 (Patient File.)
START DATE | LITERAL | 16 |  | Optional start date to begin the search.
STOP DATE | LITERAL | 16 |  | Optional stop date to end the search.
SERVICE | LITERAL | 16 |  | Optional consulting service from the Request Service file (#123.5).



## MUMPS Method Description

Property | Value
--- | ---
Method | [LIST^ORQQCN](http://code.osehra.org/dox/Routine_ORQQCN_source.html)
Method Comment | return patient&#x27;s consult requests between start date and stop date for the service and status indicated:
Input Parameters | ORPT, ORSDT, OREDT, ORSERV, ORSTATUS
Code | {::nomarkdown}<pre><code> N I,J,SITE,SEQ,DIFF,ORSRV,ORLOC,GMRCOER<br/> S J=1,SEQ="",GMRCOER=2<br/> S:'$L($G(ORSDT)) ORSDT=""<br/> S:'$L($G(OREDT)) OREDT=""<br/> S:'$L($G(ORSERV))!(+$G(ORSERV)=0) ORSERV=""<br/> S:'$L($G(ORSTATUS)) ORSTATUS="" ;ALL STATI<br/> K ^TMP("GMRCR",$J)<br/> S ORY=$NA(^TMP("ORQQCN",$J,"CS"))<br/> D OER^GMRCSLM1(ORPT,ORSERV,ORSDT,OREDT,ORSTATUS,GMRCOER)<br/> M @ORY=^TMP("GMRCR",$J,"CS")<br/> K @ORY@("AD")<br/> K @ORY@(0)<br/> K ^TMP("GMRCR",$J)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Consults/rConsults.pas">Consults/rConsults.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}