---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAG3 TIU MODIFY NOTE<br/>
# MAG3 TIU MODIFY NOTE

Modify an Existing Note. Change it's status from unsigned to administrative closureor to signed.

## Properties

Property | Value
--- | ---
Label | MOD
MUMPS Implementation | [MAGGNTI1](http://code.osehra.org/dox/Routine_MAGGNTI1_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
MAGDFN | LITERAL | 60 | true | DFN of the Patient.
MAGTIUDA | LITERAL | 60 | true | This is the IEN of the Note in file ^TIU(8925
MAGADCL | LITERAL | 10 | true |  1 &#x3D; Mark this Note as Administratively Closed otherwise it will be Un-Signed
MAGMODE | LITERAL | 20 | true | Mode of Admin Closure:&quot;S&quot; &#x3D; Scanned Document&quot;M&quot; &#x3D; Manual closure
MAGES | LITERAL | 90 | true | The encrypted Electronic Signature
MAGESBY | LITERAL | 90 | true |  The DUZ of the Signer (Defaults to DUZ)
MAGTEXT | LIST | 3200 | true | Array of Text to add to the Note.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}