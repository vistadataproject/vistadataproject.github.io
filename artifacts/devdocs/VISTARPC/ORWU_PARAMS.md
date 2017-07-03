---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWU PARAMS
# ORWU PARAMS

Simple call to return a list of parameter values such as:         INST1^VALUE1        INST2^VALUE2        ...        INSTN^VALUEN The call assumes the current user, 'defaultable' entities and multiple instances.

Property | Value
--- | ---
Label | PARAMS
Routine | [ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html)
Return Type | ARRAY




### MUMPS Method Description

Property | Value
--- | ---
Method | [PARAMS^ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html)
Method Comment | return a list of parameter values
Input Parameters | APARAM
First Comment | {::nomarkdown}<pre><code> call assumes current user, default entities, multiple instances</code></pre>{:/}
Code | {::nomarkdown}<pre><code> D GETLST^XPAR(.ORLIST,"ALL",APARAM,"Q")</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas">rCore.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}