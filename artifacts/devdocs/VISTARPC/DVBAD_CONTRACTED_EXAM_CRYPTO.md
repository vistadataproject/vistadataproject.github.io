---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DVBAD CONTRACTED EXAM CRYPTO<br/>
# DVBAD CONTRACTED EXAM CRYPTO

Allows the demTRAN (GUI) application to Encrypt/Decrypt information for storage to or retrieval from the VistA environment.

## Properties

Property | Value
--- | ---
Label | EN
MUMPS Implementation | [DVBACEM1](http://code.osehra.org/dox/Routine_DVBACEM1_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DVBAETYP | LITERAL | 1 | true | The type of cryptography action to execute: 1: Encryption or 2: Decryption.
DVBAIVAL | LITERAL | 999 | true | The single or &#x27;^&#x27; delimited string value(s) to perform the cryptography action on.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}