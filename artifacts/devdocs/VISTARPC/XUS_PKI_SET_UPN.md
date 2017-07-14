---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; XUS PKI SET UPN<br/>
# XUS PKI SET UPN

This RPC is used to set the SUBJECT ALTERNATIVE NAME in the New Person #(200) file field 501.2. 

## Properties

Property | Value
--- | ---
Label | SETUPN
Routine | [XUSER2](http://code.osehra.org/dox/Routine_XUSER2_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
UPN | LITERAL | 50 | true | This is the SUBJECT ALTERNATIVE NAME from the PIV card.



## MUMPS Method Description

Property | Value
--- | ---
Method | [SETUPN^XUSER2](http://code.osehra.org/dox/Routine_XUSER2_source.html)
Method Comment | Set the SUBJECT ALTERNATIVE NAME from the PIV card. -p580
Input Parameters | V
Code | {::nomarkdown}<pre><code> N FDA,ERR<br/> S RET=0,FDA(200,DUZ_",",501.2)=V<br/> D FILE^DIE("KE","FDA","ERR") I '$D(ERR) S RET=1</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/uOrders.pas">Orders/uOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}