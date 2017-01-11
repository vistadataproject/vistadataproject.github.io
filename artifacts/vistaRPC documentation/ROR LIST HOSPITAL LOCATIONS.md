---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ROR LIST HOSPITAL LOCATIONS 

 property | value 
--- | --- 
 label | ROR LIST HOSPITAL LOCATIONS
 tag | HLOCLIST
 routine | [RORRP015](http://code.osehra.org/dox/Routine_RORRP015_source.html)
 return value type | GLOBAL ARRAY
 description | The ROR LIST HOSPITAL LOCATIONS remote procedure returns a list of hospital locations (defined in the HOSPITAL LOCATION file), which conformthe criteria.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| PART | LITERAL | 30 |  | The partial match restriction. | 
| FLAGS | LITERAL |  |  | Flags that control the execution (can be combined):   A  Include active locations (default)   B  Backwards. Traverses the index in the opposite     direction of normal traversal.   I  Include inactive locations | 
| NUMBER | LITERAL |  |  | Maximum number of entries to return. A value of \*\ or no value in this parameter designates all entries. | 
| FROM | LITERAL |  |  | The index entry(s) from which to begin the list  ^01: FromName  ^02: FromIEN For example, a FROM value of \VA\ would list entries following VA. You canuse the 2-nd and 3-rd \^\- pieces of the @RESULTS@(0) node to continue thelisting in the subsequent procedure calls. NOTE: The FROM value itself is not included in the      resulting list. See description of the LIST^DIC for more details about the PART, NUMBERand FROM parameters. | 
| HLTYPES | LITERAL |  |  | List of location types separated by commas (internal values of the TYPEfield of the HOSPITAL LOCATION file):   C   Clinic  F   File Area  I   Imaging  M   Module  N   Non-Clinic Stop  OR  Operating Room  W   Ward  Z   Other Location Only locations of the types defined by this parameter are selected by the remote procedure. By default ($G(HLTYPES)=\\), all locations are selected. | 
| DIVIEN | LITERAL |  |  | Division IEN. If this parameter is defined and greater than zero then onlythe locations associated with this division are selected. | 