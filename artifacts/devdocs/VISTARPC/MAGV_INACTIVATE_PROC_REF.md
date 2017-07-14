---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAGV INACTIVATE PROC REF<br/>
# MAGV INACTIVATE PROC REF

This RPC inactivates an entry on the IMAGING PROCEDURE REFERENCE File(#2005.61).

## Properties

Property | Value
--- | ---
Label | INPROC
Routine | [MAGVRS07](http://code.osehra.org/dox/Routine_MAGVRS07_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PROCIEN | LITERAL | 10 | true | This is the internal entry number of the requested procedure on the IMAGING PROCEDURE REFERENCE File (#2005.61).
PATIEN | LITERAL | 10 | true | This is the internal entry number on the IMAGING PATIENT REFERENCE File (#2005.6) of the patient reference with which this procedure reference is associated.
OVERRIDE | LITERAL | 3 |  | This parameter should be used with EXTREME CAUTION.  It suppresses the validation of the patient reference against the procedure reference with which it is associated.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}