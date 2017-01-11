---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; YTQ GENERIC LISTER 

 property | value 
--- | --- 
 label | YTQ GENERIC LISTER
 tag | LISTER
 routine | [YTQAPI2](http://code.osehra.org/dox/Routine_YTQAPI2_source.html)
 return value type | ARRAY
 description | Returns a lists of all entries in a file for a specified field.  Input: FIELN: file or subfile Number       FIELD: filed number     optionals       FLAG: 'I' returns internal format, 'B' backwards sort              defaul= external, forward       NUMBER: number of entries requested default=500       FROM: last ien already retrieved  default= start       INDEX: index to sort on   default=  regular cross-ref on IEN Output: [DATA]        # of entries returned^#requested (often 500)^any more (0 or 1)        IEN^Data requested        .        .        IEN^Data requested




 ###### Generated on January 11th 2017, 6:39:43 am