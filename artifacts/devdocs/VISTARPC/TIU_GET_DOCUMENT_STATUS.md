---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; TIU GET DOCUMENT STATUS
# TIU GET DOCUMENT STATUS

This RPC is used to retrieve the Status (8925.6 IEN) of a TIU DOCUMENT.

Property | Value
--- | ---
Label | GETSTAT
Routine | [TIUPRF2](http://code.osehra.org/dox/Routine_TIUPRF2_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
TIUIEN | LITERAL |  | true | TIU DOCUMENT IEN (8925)



### MUMPS Method Description

Property | Value
--- | ---
Method | [GETSTAT^TIUPRF2](http://code.osehra.org/dox/Routine_TIUPRF2_source.html)
Method Comment | RPC Gets the status of TIU Doc TIUIEN
Input Parameters | TIUIEN
First Comment | {::nomarkdown}<pre><code>Returns STATIEN^STATNAME</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N TIUTTL<br/> S TIUTTL=+$G(^TIU(8925,TIUIEN,0))<br/> I 'TIUTTL S TIUY="0^Document does not exist" Q<br/> S TIUY=$P(^TIU(8925,TIUIEN,0),U,5)<br/> S TIUY=TIUY_U_$P($G(^TIU(8925.6,TIUY,0)),U,1)</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
NOT OSEHRA CPRS | {::nomarkdown}N/A{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}