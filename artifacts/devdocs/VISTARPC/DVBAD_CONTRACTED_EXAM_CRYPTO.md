---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DVBAD CONTRACTED EXAM CRYPTO
# DVBAD CONTRACTED EXAM CRYPTO

Allows the demTRAN (GUI) application to Encrypt/Decrypt information for storage to or retrieval from the VistA environment.

Property | Value
--- | ---
Label | EN
Routine | [DVBACEM1](http://code.osehra.org/dox/Routine_DVBACEM1_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DVBAETYP | LITERAL | 1 | true | The type of cryptography action to execute: 1: Encryption or 2: Decryption.
DVBAIVAL | LITERAL | 999 | true | The single or &#x27;^&#x27; delimited string value(s) to perform the cryptography action on.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}