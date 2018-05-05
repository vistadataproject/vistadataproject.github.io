---
layout: default
title: VICS Metadata Sample and Plan
---

# VICS Metadata Sample and Plan

Build 2 Meta Dataset of (FOIA/node) VISTA with Station Number 999 to support Meta Data Services and emulated RPCs in the VICS Server (2018-03-07 02:53). Data was [1] cached from this VISTA and [2] transformed to conform to the VICS Data Model before being [3] loaded into the VICS Server database. Every VISTA supported in VICS will require the same 3 steps on its meta data.

Build 3 will bring [a] further refinement of the _VICS Data Model_ of meta data, the production of [b] meta datasets for both Cheyenne and Palo Alto (time permitting) and [c] analyis and accounting for differences between Palo Alto and FOIA configuration meta data. 

National (every VISTA) Data. This "concept" data is __the same in all up-to-date VISTAs__. VISTA didn't put all concepts into the Lexicon. Note how _Concept_ is a NEW class (file) type from VAM, one requiring its own id in an _official name space_. It will absorb more "concept" data in Build 3. Also note that the move to concept meant refining the implementation of the Lexicon Service ...

\# | Type | FMIds | Count
---|---|---|---
1 | __CONCEPT__ | 757_01, 757, 757_02, 757_2, 757_001 | 769,194
2 | NDC/UPN* | 50_67, 50_68 (Part) | 237,445
3 | ICD DIAGNOSIS | 80 | 87,716
4 | ICD OPERATION/PROCEDURE | 80_1 | 83,848
5 | VA PRODUCT | 50_68 | 27,766
6 | VA GENERIC | 50_6 | 5,177
7 | DRUG INGREDIENTS | 50_416 | 5,076
8 | PERSON CLASS | 8932_1 | 1,222
9 | GMR ALLERGIES | 120_82 | 797
10 | SIGN/SYMPTOMS | 120_83 | 591
11 | VA DRUG CLASS | 50_605 | 579
12 | GMRV VITAL QUALIFIER | 120_52 | 119
13 | EXCLUDED WORDS | 757_04 | 116
14 | CODING SYSTEMS | 757_03 | 36
15 | GMRV VITAL TYPE | 120_51 | 19
16 | NATURE OF ORDER | 100_02 | 12
17 | PARAMETER ENTITY | 8989_518 | 11
18 | SKIN TEST | 9999999_28 | 9
19 | GMRV VITAL CATEGORY | 120_53 | 6
20 | ICD CODING SYSTEMS | 80_4 | 4

Local (this VISTA only) Data. Palo Alto will have a lot MORE data in the bolded files below as well as in __Provider Narrative__ which is empty in FOIA. In addition, its one-only configuration data (_GMR ALLERGY SITE PARAMETERS_ etc) and System-scoped PARAMETER settings may be different and may demand expansion of VICS service options and testing ...

\# | Type | FMId | Count
---|---|---|---
1 | SELECTION | 357_3 | 252,410
2 | SELECTION GROUP | 357_4 | 15,006
3 | OPTION | 19 | 10,425
4 | INSTALL | 9_7 | 10,208
5 | REMINDER DIALOG | 801_41 | 7,639
6 | HEALTH FACTORS | 9999999_64 | 5,181
7 | ENCOUNTER FORM BLOCK | 357_1 | 2,551
8 | __INSTITUTION__ | 4 | 2,536
9 | SELECTION LIST | 357_2 | 1,561
10 | LABORATORY TEST | 60 | 1,038
11 | HELP FRAME | 9_2 | 964
12 | CLINIC STOP | 40_7 | 554
13 | DOSAGE FORM | 50_606 | 320
14 | ORDER DIALOG | 101_41 | 262
15 | MEDICATION ROUTES | 51_2 | 242
16 | __TIU DOCUMENT DEFINITION__ | 8925_1 | 239
17 | OE/RR REPORT | 101_24 | 172
18 | __PARAMETERS__ | 8989_5 | 166
19 | IMMUNIZATION | 9999999_14 | 161
20 | REMINDER DEFINITION | 811_9 | 147
21 | PACKAGE | 9_4 | 142
22 | PCE CODE MAPPING | 811_1 | 141
23 | PACKAGE INTERFACE | 357_6 | 122
24 | USR CLASS | 8930 | 116
25 | USR AUTHORIZATION/SUBSCRIPTION | 8930_1 | 114
26 | __NAME COMPONENTS__* | 20 | 95
27 | DOMAIN | 4_2 | 85
28 | PARAMETER DEFINITION | 8989_51 | 83
29 | EDUCATION TOPICS | 9999999_09 | 68
30 | __NEW PERSON__ | 200 | 68
31 | DISPLAY GROUP | 100_98 | 57
32 | __TIU TEMPLATE__ | 8927 | 34
33 | __DRUG__ | 50 | 31
34 | EXAM | 9999999_15 | 31
35 | ACCESSION | 68 | 22
36 | ORDER REASON | 100_03 | 22
37 | ANCILLARY DSS ID | 150_1 | 15
38 | REQUEST SERVICES | 123_5 | 14
39 | PHARMACY ORDERABLE ITEM | 50_7 | 12
40 | __ORDERABLE ITEMS__ | 101_43 | 12
41 | __HOSPITAL LOCATION__ | 44 | 10
42 | USR CLASS MEMBERSHIP | 8930_3 | 3
43 | OR CPRS TABS | 101_13 | 2
44 | INSTITUTION ASSOCIATION TYPES | 4_05 | 2
45 | __SERVICE/SECTION__ | 49 | 1
46 | __STATION NUMBER (TIME SENSITIVE)__ | 389_9 | 1
47 | _KERNEL SYSTEM PARAMETERS_ | 8989_3 | 1
48 | __TITLE__ | 3_1 | 1
49 | _PROBLEM LIST SITE PARAMETERS_ | 125_99 | 1
50 | _GMRV VITALS PARAMETERS_ | 120_57 | 1
51 | _OE/RR EPCS PARAMETERS_ | 100_7 | 1
52 | __ORDER QUICK VIEW__ | 101_44 | 1
53 | _GMR ALLERGY SITE PARAMETERS_ | 120_84 | 1

__Note__: \* means planned to be merged/retired in Build 3.

The following Transforms turned Cached Data into the VICS Compatible Dataset ...

\# | Id | Description
---|---|---
1 | FlattenMultiples | Flatten Multiples/Contained Object Lists if singletons and remove ien and empty lists
2 | ObfuscateNPI | If realish dataset, obfuscates NPI
3 | BooleanTwoValueCodes | Turn one and two value YES/NO codes into Booleans. Also gather changed properties which are candidates for 'isX' form
4 | FlattenCodesToExternals | Flatten codes from IVALUE:EVALUE to EVALUE
5 | URNIds | Turn all ids into URN form
6 | AddStationNumberProperty | Add station number property explicitly - makes multi-VISTA database easy to query
7 | CamelCaseProperties | Turn _ form of DM in FMQL fileman data into camel case form
8 | MakeLexiconWordFrequencies | Concept Term Frequency Maker
9 | MakeSKOSConceptFromMCExpression | Major Concept Expressions take over Lexicon
10 | AddCodeToExpression | Move SNOMED code from 757_02
11 | AddPLSSubsetToExpression | Move (A)PLS subset designation to MC Expression
12 | AddConceptUsageToExpression | Concept Usage (from 757_001) added to Expression (as proxy for Major Concept)
13 | SupportWordIndex120_8_23 | Word Index (lookupWords, lookupPhrases) 120.82 and 120.83
14 | SupportWordIndex50 | Word Index (lookupWords, lookupPhrases) 50
15 | SwitchLabel50_605 | Switch Label 50.605
16 | SwitchLabel50_67 | Switch Label 50.67
17 | LinkNDCToGeneric | Link 50.67 to VA Generic 50.6 directly
18 | SupportWordIndex757_01 | Word Index (lookupWords, lookupPhrases) for all - not just SNOMED - Lexicon Expressions (757_01)
19 | Subset68 | Remove work/patient specific subobjects (multiples) of Accession (68). Accessions reflect places of work in a lab but the (old style) model of 68 puts actual, patient-specific work underneath these place objects rather than using a graph pattern where patient objects point to meta objects. A similar pattern is seen in Schedules for Locations.
20 | ReduceParameterDefinitionToCPRSSet | Reduce Parameter Definition (8989_51) to set used by CPRS
21 | ReduceParameterToCPRSSet | Subset Parameter (8989.5) assertions to only those parameters exposed to CPRS through its RPCs. Other parameters drive internal VISTA function. Note that this set may expand to include parameters that drive VICS-emulated clinical functions.
22 | TmpChangeDataForBuild2 | Tmp Clean 00-00 month-day AND 'value' allowed and other qualified names loose _
