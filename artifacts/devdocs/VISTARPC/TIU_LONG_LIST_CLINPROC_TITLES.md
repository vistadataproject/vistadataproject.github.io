---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; TIU LONG LIST CLINPROC TITLES
# TIU LONG LIST CLINPROC TITLES

This RPC serves data to a longlist of selectable Titles for CLINICALPROCEDURES.

Property | Value
--- | ---
Label | LNGCP
Routine | [TIUCP](http://code.osehra.org/dox/Routine_TIUCP_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FROM | LITERAL |  | true | This is the reference Title from which the longlist is scrolling.
DIR | LITERAL |  |  | This is the direction in which the longlist is scrolling from thereference Title.



### MUMPS Method Description

Property | Value
--- | ---
Method | [LNGCP^TIUCP](http://code.osehra.org/dox/Routine_TIUCP_source.html)
Method Comment | RPC that serves data to a longlist of selectable Titles
Input Parameters | FROM, DIR
First Comment | {::nomarkdown}<pre><code> Input  -- FROM     Reference Title from which the longlist is<br/>                    scrolling<br/>           DIR      Direction from which the longlist is scrolling<br/>                    from the reference Title  (Optional- default 1)<br/> Output -- Y        An array of the 44 nearest Titles to that indicated<br/>                    by the user in the direction passed by the longlist<br/>                    component</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N TIUCLASS<br/> I '$D(FROM) G LNGCPQ<br/> S TIUCLASS=+$$CLASS<br/> I +TIUCLASS'>0 G LNGCPQ<br/> D LONGLIST^TIUSRVD(.Y,TIUCLASS,FROM,$G(DIR,1))</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Consults/rConsults.pas">Consults/rConsults.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}