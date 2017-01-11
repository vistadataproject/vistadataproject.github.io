---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MD TMDRECORDID 

 property | value 
--- | --- 
 label | MD TMDRECORDID
 tag | RPC
 routine | [MDRPCOR](http://code.osehra.org/dox/Routine_MDRPCOR_source.html)
 return value type | GLOBAL ARRAY
 description | General RPC for VA Fileman functions. Param 1 is passed in as the function to perform and includes thefollowing: LOOKUP:   Performs very generic file lookup functionalityVALIDATE: Validates input to a fileman field and saves to FDADELREC:   Validates ability to delete and if able deletes a recordSETFDA:   Validates input and stores in FDASAVEFDA:  Saves any data stored in FDACLEARFDA: Clears any data in the FDA without savingGETDATA:  Retrieves a single field valueGETCODES: Retrieves the set of codes for a fieldGETLABEL: Retrieves a fields TITLE or LABEL if no TitleGETIDS:   Returns required identifiers for a DD NumberGETHELP:  Returns Fileman help for a fieldRENAME:   Validates and renames .01 field if validNEWREC:   Creates a new recordCHANGES:  Returns 0/1 if changes exist in FDACHKVER:   Version check Client <-> ServerLOCK:     Locks a record by DD and IENSUNLOCK:   Unlocks record locked by LOCK option

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| OPTION | LITERAL | 30 | true | See description of RPC. | 
| DDNUM | LITERAL | 10 | true | Contains the Data Dictionary number of the item being manipulated. | 
| IENS | LITERAL | 20 | true | Contains the IENS of the record being manipulated. | 
| FLD | LITERAL | 10 | true | Contains field specifications for the record. | 
| DATA | LITERAL | 30 | true | Contains any other needed information for the call. | 




Generated on January 11th 2017, 6:34:23 am