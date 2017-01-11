---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAG STORAGE FETCH SET 

 property | value 
--- | --- 
 label | MAG STORAGE FETCH SET
 tag | SETLOC
 routine | [MAGSFTCH](http://code.osehra.org/dox/Routine_MAGSFTCH_source.html)
 return value type | ARRAY
 description | Sets the network location pieces 3 and 4 of the IMAGE file (#2005) 0 nodeor update the WORM network location reference piece 5 in 0 node,or update the BIG file reference in \FBIG\ node.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| MAGIEN | LITERAL | 10 | true | Image IEN | 
| NTLOC | LITERAL | 5 | true | IEN of NETWORK LOCATION file (#2005.2) to be set in IMAGE file (#2005). | 




 Generated on January 11th 2017, 7:15:04 am