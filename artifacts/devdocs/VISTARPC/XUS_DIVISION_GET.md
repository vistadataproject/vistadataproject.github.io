---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; XUS DIVISION GET<br/>
# XUS DIVISION GET

This RPC will return a list of divisions of a user.

## Properties

Property | Value
--- | ---
Label | DIVGET
Routine | [XUSRB2](http://code.osehra.org/dox/Routine_XUSRB2_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
IEN | LITERAL | 30 | true | If passed this will be the user to get the division info on.



## MUMPS Method Description

Property | Value
--- | ---
Method | [DIVGET^XUSRB2](http://code.osehra.org/dox/Routine_XUSRB2_source.html)
Method Comment | Get Division data
Input Parameters | IEN
First Comment | {::nomarkdown}<pre><code>IEN is userid (DUZ or username) for future use.</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N %,XUDIV<br/> S XUDIV=0,%=$$CHKDIV^XUS1(.XUDIV) ;Get users div.<br/> I (%>0)&($P(%,U,2)'>0) D UPDIV(+%) ;Set users default div.<br/> S RET(0)=XUDIV ;RET(0) is number of divisions.<br/> I XUDIV S %=0 D  S RET(0)=XUDIV<br/> . ;RET(%) is divison array eg. ien;station name;station#<br/> . F  S %=$O(XUDIV(%)) Q:(%'>0)  S RET(%)=XUDIV(%)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Executable Only | {::nomarkdown}{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}