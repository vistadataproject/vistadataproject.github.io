---
layout: default
title: Parameters
---

## [Parameters](TableOfContents) &#8594; RCDPE EDI LOCKBOX WORKLIST
# RCDPE EDI LOCKBOX WORKLIST

The ERA List - Worklist screen within the ERA Worklist option [RCDPE EDI LOCKBOXWORKLIST]  provides the capability to filter the data displayed via the ChangeView action. The Change View action allows users to change and save theirindividual filter preferences.  Below is a list of the parameter/value pairs (instances) for the Change View action, which are stored using this Parameter Definition.  Parameter Instance              Possible Value ------------------------------------------------------------------------------ ERA_POSTING_STATUS              &#x27;U&#x27;:Unposted;&#x27;P&#x27;:Posted;&#x27;B&#x27;:Both ERA-EFT_MATCH_STATUS            &#x27;N&#x27;:Not Matched;&#x27;M&#x27;:Matched;&#x27;B&#x27;:Both ALL_PAYERS/RANGE_OF_PAYERS      3 fields:A/R;StartWith;GoTo (e.g.,&#x27;R;AE;AEZ&#x27;) ERA_AUTO_POSTING                &#x27;A&#x27;:Auto-Posting;&#x27;N&#x27;:Non Auto-Posting;&#x27;B&#x27;:Both ERA_CLAIM_TYPE                  &#x27;M&#x27;:Medical;&#x27;P&#x27;:Pharmacy;&#x27;B&#x27;:Both Note: The second and third fields of ALL_PAYERS/RANGE_OF_PAYERS are only      present When the first field is set to &#x27;R&#x27; (Range of Payers)

Property | Value
--- | ---
ID | 787
Summary | ERA Worklist Change View Parameters
Value Type | free text
Value Domain | N/A
Multiple Instances | true

### Allowable Entities

Precedence | Entity
--- | ---
1 | USER

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:01 pm</p>{:/}