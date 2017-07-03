---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWLR CUMULATIVE SECTION
# ORWLR CUMULATIVE SECTION

This rpc retrieves the part of the lab cumulative report selected by the user on the Labs tab.

Property | Value
--- | ---
Label | RPT
Routine | [ORWLR](http://code.osehra.org/dox/Routine_ORWLR_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL | 20 | true | Internal entry number of entry in the Patient file.
PART OF CUMULATIVE | LITERAL | 20 | true | Name that uniquely identifies the desired part of the lab cumulative.
DATE RANGE | LITERAL | 5 | true | This parameter indicates the number of days from TODAYthat the cumulative should search for information.
REPORT SECTION | LITERAL | 2 | true | This parameter specifics which section of the lab cumulative partshould be retrieved. (An example of a part is &#x27;Miscellaneous Tests&#x27;.)If REPORT SECTION equals 0 then the entire part is re-compiled and thefirst section is passed back. If the part is large then it isnecessary to divide it into sections. Currently, each section cannot be more than be more than 20,000 characters



### MUMPS Method Description

Property | Value
--- | ---
Method | [RPT^ORWLR](http://code.osehra.org/dox/Routine_ORWLR_source.html)
Method Comment | return cum report text
Input Parameters | DFN, RPTID, DTRANGE, SECTION
First Comment | {::nomarkdown}<pre><code>  RPC: ORWLR REPORT TEXT</code></pre>{:/}
Code | {::nomarkdown}<pre><code> IF $G(SECTION),$D(^TMP("ORLABDATA",$J,SECTION)) D  G RPTQ<br/> . S OROOT=$NA(^TMP("ORLABDATA",$J,SECTION))<br/> N LINES,ORSUB<br/> K ^TMP("ORLABDATA",$J)<br/> D CUMB(DFN,RPTID,DTRANGE)<br/> S LINES=$S($D(^TMP("LRH",$J,RPTID)):+^(RPTID),1:0)<br/> IF LINES<241 D<br/> . S OROOT=$NA(^TMP("LRC",$J))<br/> . S @OROOT@(.001)="1^1"<br/> ELSE  D<br/> . S ORSUB="ORLABDATA",OROOT=$NA(^TMP(ORSUB,$J,1))<br/> . D BUILD</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
NOT OSEHRA CPRS | {::nomarkdown}N/A{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}