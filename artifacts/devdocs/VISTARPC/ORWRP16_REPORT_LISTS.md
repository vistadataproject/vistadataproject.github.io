---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWRP16 REPORT LISTS<br/>
# ORWRP16 REPORT LISTS

This remote procedure call returns a list of reports,Health Summary types and date ranges that can be displayedat the workstation.There are no input parameters fo this rpc.

## Properties

Property | Value
--- | ---
Label | LIST
Routine | [ORWRP16](http://code.osehra.org/dox/Routine_ORWRP16_source.html)
Return Type | GLOBAL ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [LIST^ORWRP16](http://code.osehra.org/dox/Routine_ORWRP16_source.html)
Method Comment | return lists for list boxes
First Comment | {::nomarkdown}<pre><code>  RPC: ORWRP REPORT LIST<br/>  See RPC definition for details on input and output parameters<br/></code></pre>{:/}
Code | {::nomarkdown}<pre><code> N EOF<br/> S EOF="$$END",ROOT=$NA(^TMP($J,"ORPTLIST"))<br/> K @ROOT<br/> D GETRPTS(.ROOT,.EOF)<br/> D GETHS(.ROOT,.EOF)<br/> D GETDT(.ROOT,.EOF)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
NOT OSEHRA CPRS | {::nomarkdown}{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}