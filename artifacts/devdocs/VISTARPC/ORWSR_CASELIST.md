---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWSR CASELIST
# ORWSR CASELIST

Returns a list of all surgery cases for a patient, without documents asreturned by ORWSR LIST.

Property | Value
--- | ---
Label | CASELIST
Routine | [ORWSR](http://code.osehra.org/dox/Routine_ORWSR_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
dfn | LITERAL | 32 | true | Patient DFN



### MUMPS Method Description

Property | Value
--- | ---
Method | [CASELIST^ORWSR](http://code.osehra.org/dox/Routine_ORWSR_source.html)
Method Comment | retrieve list of cases, but no documents
Input Parameters | ORDFN
Code | {::nomarkdown}<pre><code> Q:'$$PATCH^XPDUTL("SR*3.0*100")<br/> Q:'+ORDFN<br/> N ORBDT,OREDT,ORMAX,I,SHOWDOCS S (ORBDT,OREDT,ORMAX)="",SHOWDOCS=0<br/> S ORY=$NA(^TMP("ORLIST",$J))<br/> D LIST^SROESTV(.ORY,ORDFN,ORBDT,OREDT,ORMAX,SHOWDOCS)<br/> S I=0<br/> F  S I=$O(@ORY@(I)) Q:+I=0  D<br/> . S $P(@ORY@(I),U,4)=$P($P(@ORY@(I),U,4),";",2)</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rSurgery.pas">rSurgery.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}