---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAG3 TIU NEW<br/>
# MAG3 TIU NEW

RPC Call to create a New Note   and Optionally :             Electronically Sign the Note.           Administratively Close the Note.           Add Text to the Note.

## Properties

Property | Value
--- | ---
Label | NEW
MUMPS Implementation | [MAGGNTI1](http://code.osehra.org/dox/Routine_MAGGNTI1_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
MAGDFN | LITERAL | 60 | true | DFN of the Patient.
MAGTITLE | LITERAL | 60 | true | IEN of TIU DOCUMENT DEFINITION entry in file ^TIU(8925.1
MAGADCL | LITERAL | 10 | true |   1 &#x3D; Mark this Note as Administratively Closed  otherwise it will be Un-Signed
MAGMODE | LITERAL | 30 | true | Mode of Admin Closure: &quot;S&quot; &#x3D; Scanned Document &quot;M&quot; &#x3D; Manual closure
MAGES | LITERAL | 60 | true |  The encrypted Electronic Signature
MAGESBY | LITERAL | 90 | true |  The DUZ of the Signer (Defaults to DUZ)
MAGLOC | LITERAL | 60 | true | IEN in Hospital Location File #44, Global ^SC(
MAGTEXT | LIST | 3200 | true | Array of Text to add to the New Note.
MAGDATE | LITERAL | 40 | true | Date of the Note. For New Notes.
MAGCNSLT | LITERAL | 30 | true | DA of Consult to Link this note to.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}