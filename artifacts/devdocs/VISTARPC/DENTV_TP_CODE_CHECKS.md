---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DENTV TP CODE CHECKS<br/>
# DENTV TP CODE CHECKS

Processes coding compliance checks for ADA codes entered by the user.  

## Properties

Property | Value
--- | ---
Label | CK
MUMPS Implementation | [DENTVCK](http://code.osehra.org/dox/Routine_DENTVCK_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL | 30 | true | Contains patient dfn.
ECODE | LITERAL | 6 | true | Contains the internal, or external ADA Code (e.g. 100268, or D0120) followed by a colon and the tooth# for the code entered by the user.
VISDT | LITERAL |  | true | Contains the visit date to be used to look back for codes.  A visit date&#x3D;0 means to only check the current session data, not the historical records.
PROV | LITERAL | 30 | true | Contains the provider (DUZ) to be used to check compliance.
DATA | LIST | 10 | true | Contains an array of the current session&#x27;s completed procedures as DATA(n)&#x3D;ADA Code



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}