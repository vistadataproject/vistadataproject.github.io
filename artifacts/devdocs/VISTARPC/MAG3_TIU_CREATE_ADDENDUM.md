---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAG3 TIU CREATE ADDENDUM<br/>
# MAG3 TIU CREATE ADDENDUM

Creates a TIU Addendum to a document.  RPC call to create an Addendum to a Note  and Optionally :             Electronically Sign the Addendum           Administratively Close the Addendum           Add Text to the Addendum

## Properties

Property | Value
--- | ---
Label | NEWADD
Routine | [MAGGNTI1](http://code.osehra.org/dox/Routine_MAGGNTI1_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
MAGDFN | LITERAL | 30 | true | DFN of the Patient.
MAGTIUDA | LITERAL | 60 | true | This is the IEN of the Note in file ^TIU(8925
MAGADCL | LITERAL | 60 | true |  1 &#x3D; Mark this Note as Administratively Closed otherwise it will be Un-Signed
MAGMODE | LITERAL | 30 | true | Mode of Admin Closure:&quot;S&quot; &#x3D; Scanned Document&quot;M&quot; &#x3D; Manual closure
MAGES | LITERAL | 60 | true | The encrypted Electronic Signature
MAGESBY | LITERAL | 90 | true |  The DUZ of the Signer (Defaults to DUZ)
MAGTEXT | LIST | 3200 | true | Array of Text to add to the New Note.
MAGDATE | LITERAL | 40 | true | The Date of the New TIU Note/Addendum



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}