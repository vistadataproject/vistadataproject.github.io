---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; VPS GET ALL CLINICS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}VPS GET ALL CLINICS{:/}
 tag | {::nomarkdown}ALLCLN{:/}
 routine | [VPSRPC10](http://code.osehra.org/dox/Routine_VPSRPC10_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This RPC returns a list of hospital locations (defined in the HOSPITAL LOCATION file), which conform the criteria.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}HLTYPES{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}List of location types separated by commas (internal values of the TYPE field of the HOSPITAL LOCATION file):  C  Clinic  F  File Area  I  Imaging  M  Module  N  Non-Clinic Stop  OR Operating Room  W  Ward  Z  Other Location Only locations of the types defined by this parameter are selected by the remote procedure. By default ($G(HLTYPES)=\\), all locations are selected.{:/} | 
| {::nomarkdown}DIVIEN{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Division IEN. If this parameter is defined and greated than zero then only the locations associated with this division are selected.{:/} | 
| {::nomarkdown}PART{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} |  | {::nomarkdown}The partial match restriction.{:/} | 
| {::nomarkdown}FLAGS{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Flags that control the execution (can be combined):   A  Include active locations (default)  B  Backwards. Traverses the index in the opposite     direction of normal traversal.  I  Include inactive locations{:/} | 
| {::nomarkdown}NUMBER{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Maximum number of entries to return. A value of \*\ or no value in this parameter designates all entries{:/} | 
| {::nomarkdown}FROM{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}The index entry(s) from which to begin the list  ^01: From Name  ^02: From IEN For example, a FROM value of \VA\ would list entries following VA. You can use the 2nd and 3rd \^\- pieces of the @RESULT@(0) node to continue the listing in the subsequent procedure calls. NOTE: The FROM value itself is not included in the resulting listSee description of the LIST^DIC for more details about the PART, NUMBER, and FROM parameters.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 15th 2017, 12:59:51 am</p>{:/}