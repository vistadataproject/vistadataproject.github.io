---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; TIU LONG LIST CONSULT TITLES<br/>
# TIU LONG LIST CONSULT TITLES

This RPC serves data to a longlist of selectable TITLES for CONSULTS.

## Properties

Property | Value
--- | ---
Label | LNGCNSLT
MUMPS Implementation | [TIUSRVD](http://code.osehra.org/dox/Routine_TIUSRVD_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FROM | LITERAL |  | true | This is the reference title from which the longlist is scrolling.
DIR | LITERAL |  |  | This is the direction in which the longlist is scrolling from thereference title.



## MUMPS Method Description

Property | Value
--- | ---
Method | [LNGCNSLT^TIUSRVD](http://code.osehra.org/dox/Routine_TIUSRVD_source.html)
Method Comment | Handle long list of titles for CONSULTS
Input Parameters | FROM, DIR
Code | {::nomarkdown}<pre><code> N CLASS S CLASS=+$$CLASS^TIUCNSLT Q:+CLASS'>0<br/> D LONGLIST(.Y,CLASS,$G(FROM),$G(DIR,1))</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Consults/rConsults.pas">Consults/rConsults.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}