---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; TIU LONG LIST SURGERY TITLES<br/>
# TIU LONG LIST SURGERY TITLES

This RPC serves data to a longlist of selectable TITLES for the classnamed in the CLNAME parameter.

## Properties

Property | Value
--- | ---
Label | LNGSURG
MUMPS Implementation | [TIUSRVD](http://code.osehra.org/dox/Routine_TIUSRVD_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FROM | LITERAL |  | true | This is the reference title from which the longlist is scrolling.
DIR | LITERAL |  |  | This is the direction in which the longlist is scrolling from thereference title.
CLNAME | LITERAL |  | true | This is the name of the class for which titles are being presented.Allowable values are: &quot;SURGICAL REPORTS&quot;&quot;PROCEDURE REPORTS (NON-O.R.)&quot;



## MUMPS Method Description

Property | Value
--- | ---
Method | [LNGSURG^TIUSRVD](http://code.osehra.org/dox/Routine_TIUSRVD_source.html)
Method Comment | long list SURGICAL REPORT titles
Input Parameters | FROM, DIR, CLNAME
First Comment | {::nomarkdown}<pre><code> CLNAME = "SURGICAL REPORTS" or "PROCEDURE REPORTS (NON-O.R.)"<br/>           depending on context</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N CLASS S CLNAME=$S($G(CLNAME)]"":CLNAME,1:"OPERATION REPORTS")<br/> S CLASS=$$CLASS^TIUSROI(CLNAME) Q:+CLASS'>0<br/> D LONGLIST(.Y,CLASS,$G(FROM),$G(DIR,1))</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rSurgery.pas">rSurgery.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}