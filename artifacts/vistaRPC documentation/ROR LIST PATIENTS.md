---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ROR LIST PATIENTS 

 property | value 
--- | --- 
 label | ROR LIST PATIENTS
 tag | PTLIST
 routine | [RORRP019](http://code.osehra.org/dox/Routine_RORRP019_source.html)
 return value type | GLOBAL ARRAY
 description | The ROR LIST PATIENTS remote procedure returns either a list patients fromthe PATIENT file (#2) or a list of registry patients who conform theprovided criteria.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| REGIEN | LITERAL |  | true | The REGIEN parameter should contain a valid registry IEN (IEN of theregistry parameters record in the ROR REGISTRY PARAMETERS file #798.1). | 
| DATE | LITERAL |  |  | Patients who were confirmed in the registry before the date defined by theDATE parameter will be skipped by the query (if the FLAGS parametercontains the 'C' flag). | 
| PART | LITERAL | 30 |  | The PART parameter defines the search pattern. It can contain last 4 digits of the patient's SSN, the first letter of the patient's last nameand last four digits of the SSN, the full SSN, the beginning of thepatient name, or the '#' character followed by the coded SSN (11 digitsand optional 'P' character).                                      If the 'P' flag is defined (see the FLAGS parameter), the PART parametershould contain either the beginning of the patient name or an emptystring. If this parameter is a number preceded by the '`' then a list containingonly the patient with this IEN is compiled. | 
| FLAGS | LITERAL |  |  | Flags that control the execution (can be combined):    2  Search in the PATIENT file. By default, the          ROR LOCAL REGISTRY and ROR PATIENT files are     queried. This flag overrides the 'D' and 'P'     flags.   B  Backwards. Traverses the index in the opposite     direction of normal traversal.   D  Ignore those patients who were added to the     registry before the date defined by the DATE     parameter.   O  Return values of the optional fields   P  Include only pending patients   P  Include only pending patients | 
| NUMBER | LITERAL |  |  | Maximum number of entries to return. A value of \*\ or no value in this parameter designates all entries that conform the criteria. | 
| FROM | LITERAL |  |  | The index entry(s) from which to begin the list. Use the pieces of theResults[0] (starting from the second one) to continue the listing in thesubsequent procedure calls. NOTE: The FROM value itself is not included in the      resulting list. See description of the LIST^DIC for more details about the PART, NUMBERand FROM parameters. | 