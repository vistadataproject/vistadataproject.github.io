---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DENTV DD GET DATA 

 property | value 
--- | --- 
 label | DENTV DD GET DATA
 tag | GTD
 routine | [DENTVRP3](http://code.osehra.org/dox/Routine_DENTVRP3_source.html)
 return value type | ARRAY
 description | Pass this RPC a cpt code and it will return the data stored in file 228

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | CODE | LITERAL | 6 | true | This is the CPT code name.  You can also send the ien to file 81 (CPT) | 
| vs:Input_Parameter-8994_02 | KEY | LITERAL | 1 | true | Check which security key this user has. The default value is 'L', or youmay pass 'M'  If L, then see if user owns the local edit security key toedit entries in the local number space (>100,000).  If you pass 'M' thenthis will check to see if the user owns the VACO security key and if sothen the user can edit any entry in the file. | 