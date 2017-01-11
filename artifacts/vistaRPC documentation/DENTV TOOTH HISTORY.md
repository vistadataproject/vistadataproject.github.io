---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DENTV TOOTH HISTORY 

 property | value 
--- | --- 
 label | DENTV TOOTH HISTORY
 tag | TH
 routine | [DENTVRH](http://code.osehra.org/dox/Routine_DENTVRH_source.html)
 return value type | GLOBAL ARRAY
 description | This returns the dental history for a single tooth for a patient or for all records.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DATA | LITERAL | 30 | true | Input parameter for looking up dental history in file 19600.1  Format: Patient DFN ^ tooth# ^ FMDate where  Patient DFN := required - pointer to patient file (2)  tooth# := optional - number of the tooth you wish the history on.           If tooth#=0 or tooth#=\\, then return data that was not           associated with any particular tooth.           If tooth#=\ALL\, then it will return data for all teeth and           for procedures not related to a specific tooth.  FMDate := optional - Fileman date format - optional - default to all           records.  If date is passed, then only records whose date is           greater than or equal to this date will be returned | 




 Generated on January 11th 2017, 7:15:04 am