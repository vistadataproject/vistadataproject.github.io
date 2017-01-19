---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIC DDR LISTER 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIC DDR LISTER{:/}
 tag | {::nomarkdown}LIST{:/}
 routine | [DSICDDR0](http://code.osehra.org/dox/Routine_DSICDDR0_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This calls the Fileman lister, LIST^DIC to get a list of records matching the input value{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}FILE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the file number of the file that will be searched{:/} | 
| {::nomarkdown}IENS{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the standard Fileman IENS string when doing a search/lookup on a multiple in a file.{:/} | 
| {::nomarkdown}FIELD{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}250{:/} | {::nomarkdown}true{:/} | {::nomarkdown}';' delimited list of fields requested for each record{:/} | 
| {::nomarkdown}FLAGS{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}15{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the FLAGS parameter for the LIST^DIC api{:/} | 
| {::nomarkdown}NUMBER{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}4{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Enter the maximum number of matching records you wish to retrieve.{:/} | 
| {::nomarkdown}FROM{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}50{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Enter the string that will be the starting value to use when transversing the indexes looking for a match.{:/} | 
| {::nomarkdown}PARTIAL{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}50{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the PARTIAL parameter in the LIST^DIC call.{:/} | 
| {::nomarkdown}INDEX{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}50{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Enter the string of index names (separated by '^') which the search willtransverse{:/} | 
| {::nomarkdown}SCREEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}250{:/} | {::nomarkdown}true{:/} | {::nomarkdown}If you wish to screen entries, then enter that executable M code.  This is the same as DIC(\S\){:/} | 
| {::nomarkdown}IDENTIFY{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}50{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the IDENTIFIER parameter in LIST^DIC call{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 8:55:11 am</p>{:/}