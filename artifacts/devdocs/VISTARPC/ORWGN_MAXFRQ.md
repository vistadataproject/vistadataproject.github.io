---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWGN MAXFRQ<br/>
# ORWGN MAXFRQ

This RPC checks if the frequency of an ICD-10 search term is than the maximum allowed ICD-10 return values.

## Properties

Property | Value
--- | ---
Label | MAXFRQ
MUMPS Implementation | [ORWGN](http://code.osehra.org/dox/Routine_ORWGN_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ORTRM | LITERAL | 99 | true | This is the search term to be looked up.



## MUMPS Method Description

Property | Value
--- | ---
Method | [MAXFRQ^ORWGN](http://code.osehra.org/dox/Routine_ORWGN_source.html)
Method Comment | Checks if frequency of search term is greater than
Input Parameters | ORTRM
First Comment | {::nomarkdown}<pre><code> max ICD-10 setting<br/> Input Value: ORTRM = Search term to look up<br/><br/> Return Value: 2 pieces (first piece is 0 or 1, second piece is<br/>               occurrance frequency of search term)<br/>               First piece:<br/>                            0 - Search term frequency is less than<br/>                                maximum return<br/>                            1 - Search term frequency is greater<br/>                                than maximum return</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N ORMAX,ORFRQ<br/> S ORY=0<br/> I ORTRM="" Q  ;if search term not sent in, then quit<br/> S ORMAX=+$$MAX^LEXU("10D")<br/> I ORMAX=0 S ORMAX=20000  ;if Max value not set, default to 20,000<br/> S ORFRQ=+$$FREQ^LEXU(ORTRM)<br/> I ORFRQ'>ORMAX Q  ;if frequency not greater than Max value<br/> S ORY="1^"_ORFRQ<br/></code></pre>{:/}



## CPRS

File Type | Description
--- | ---
NOT OSEHRA CPRS | {::nomarkdown}{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}