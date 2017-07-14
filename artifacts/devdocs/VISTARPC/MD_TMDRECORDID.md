---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MD TMDRECORDID<br/>
# MD TMDRECORDID

General RPC for VA Fileman functions. Param 1 is passed in as the function to perform and includes thefollowing: LOOKUP:   Performs very generic file lookup functionalityVALIDATE: Validates input to a fileman field and saves to FDADELREC:   Validates ability to delete and if able deletes a recordSETFDA:   Validates input and stores in FDASAVEFDA:  Saves any data stored in FDACLEARFDA: Clears any data in the FDA without savingGETDATA:  Retrieves a single field valueGETCODES: Retrieves the set of codes for a fieldGETLABEL: Retrieves a fields TITLE or LABEL if no TitleGETIDS:   Returns required identifiers for a DD NumberGETHELP:  Returns Fileman help for a fieldRENAME:   Validates and renames .01 field if validNEWREC:   Creates a new recordCHANGES:  Returns 0/1 if changes exist in FDACHKVER:   Version check Client <-> ServerLOCK:     Locks a record by DD and IENSUNLOCK:   Unlocks record locked by LOCK option

## Properties

Property | Value
--- | ---
Label | RPC
Routine | [MDRPCOR](http://code.osehra.org/dox/Routine_MDRPCOR_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
OPTION | LITERAL | 30 | true | See description of RPC.
DDNUM | LITERAL | 10 | true | Contains the Data Dictionary number of the item being manipulated.
IENS | LITERAL | 20 | true | Contains the IENS of the record being manipulated.
FLD | LITERAL | 10 | true | Contains field specifications for the record.
DATA | LITERAL | 30 | true | Contains any other needed information for the call.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}