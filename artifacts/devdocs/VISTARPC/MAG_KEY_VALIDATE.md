---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAG KEY VALIDATE<br/>
# MAG KEY VALIDATE

This is a an interface to the Database Server (DBS) utility:Key Validator The Key Validator extrinsic function verifies that new values contained in the FDA do not produce an invalid key. All keys in which any field in the FDA participates are checked. If the value for a field in a key being checked is not present in the FDA, the value used to verify the key is obtained from the previously filed data.

## Properties

Property | Value
--- | ---
Label | KVAL
Routine | [MAGQBUT4](http://code.osehra.org/dox/Routine_MAGQBUT4_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FLAGS | LITERAL | 9 | true | (Optional) Flags to control processing. The possible values are: Q  Quit when the first problem in the FDA is encountered.
FDA | LIST | 99 | true | The root of the FDA that contains the data to be checked. The array can be a local or global one. See the Database Server Introduction for details of the structure of the FDA.The value of fields in the FDA must be the internal value. Do not pass external (e.g., unresolved pointer values, non-FileMan dates) in the FDA.No action is taken on fields in the referenced FDA if those fields do not participate in a Key defined in the KEY file.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}