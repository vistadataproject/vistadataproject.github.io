---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; VPS GET ALL CLINICS 

 property | value 
--- | --- 
 label | VPS GET ALL CLINICS
 tag | ALLCLN
 routine | [VPSRPC10](http://code.osehra.org/dox/Routine_VPSRPC10_source.html)
 return value type | GLOBAL ARRAY
 description | This RPC returns a list of hospital locations (defined in the HOSPITAL LOCATION file), which conform the criteria.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| HLTYPES | LITERAL |  |  | List of location types separated by commas (internal values of the TYPE field of the HOSPITAL LOCATION file):  C  Clinic  F  File Area  I  Imaging  M  Module  N  Non-Clinic Stop  OR Operating Room  W  Ward  Z  Other Location Only locations of the types defined by this parameter are selected by the remote procedure. By default ($G(HLTYPES)=\\), all locations are selected. | 
| DIVIEN | LITERAL |  |  | Division IEN. If this parameter is defined and greated than zero then only the locations associated with this division are selected. | 
| PART | LITERAL | 30 |  | The partial match restriction. | 
| FLAGS | LITERAL |  |  | Flags that control the execution (can be combined):   A  Include active locations (default)  B  Backwards. Traverses the index in the opposite     direction of normal traversal.  I  Include inactive locations | 
| NUMBER | LITERAL |  |  | Maximum number of entries to return. A value of \*\ or no value in this parameter designates all entries | 
| FROM | LITERAL |  |  | The index entry(s) from which to begin the list  ^01: From Name  ^02: From IEN For example, a FROM value of \VA\ would list entries following VA. You can use the 2nd and 3rd \^\- pieces of the @RESULT@(0) node to continue the listing in the subsequent procedure calls. NOTE: The FROM value itself is not included in the resulting listSee description of the LIST^DIC for more details about the PART, NUMBER, and FROM parameters. | 




Generated on January 11th 2017, 6:34:23 am