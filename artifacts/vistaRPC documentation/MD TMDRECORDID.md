---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MD TMDRECORDID 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MD TMDRECORDID{:/}
 tag | {::nomarkdown}RPC{:/}
 routine | [MDRPCOR](http://code.osehra.org/dox/Routine_MDRPCOR_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}General RPC for VA Fileman functions. Param 1 is passed in as the function to perform and includes thefollowing: LOOKUP:   Performs very generic file lookup functionalityVALIDATE: Validates input to a fileman field and saves to FDADELREC:   Validates ability to delete and if able deletes a recordSETFDA:   Validates input and stores in FDASAVEFDA:  Saves any data stored in FDACLEARFDA: Clears any data in the FDA without savingGETDATA:  Retrieves a single field valueGETCODES: Retrieves the set of codes for a fieldGETLABEL: Retrieves a fields TITLE or LABEL if no TitleGETIDS:   Returns required identifiers for a DD NumberGETHELP:  Returns Fileman help for a fieldRENAME:   Validates and renames .01 field if validNEWREC:   Creates a new recordCHANGES:  Returns 0/1 if changes exist in FDACHKVER:   Version check Client <-> ServerLOCK:     Locks a record by DD and IENSUNLOCK:   Unlocks record locked by LOCK option{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}OPTION{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}See description of RPC.{:/} | 
| {::nomarkdown}DDNUM{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Contains the Data Dictionary number of the item being manipulated.{:/} | 
| {::nomarkdown}IENS{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Contains the IENS of the record being manipulated.{:/} | 
| {::nomarkdown}FLD{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Contains field specifications for the record.{:/} | 
| {::nomarkdown}DATA{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Contains any other needed information for the call.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:23:03 am</p>{:/}