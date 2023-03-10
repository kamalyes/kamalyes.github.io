package io.github.kamalyes.algorithm.str;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

/**
 * @author <a href="mailto:forbreak@163.com">Kamalyes</a>
 * @since 2020-05-12
 */
public class StringAlgorithmTest {

    @Test
    public void isUniqueTest() {
        Assertions.assertTrue(StringAlgorithm.isUnique(""));
        Assertions.assertTrue(StringAlgorithm.isUnique("abc"));
        Assertions.assertFalse(StringAlgorithm.isUnique("leetcode"));
    }

    @Test
    public void checkPermutationTest() {
        Assertions.assertTrue(StringAlgorithm.checkPermutation("abc", "bca"));
        Assertions.assertFalse(StringAlgorithm.checkPermutation("abc", "bad"));
        Assertions.assertFalse(StringAlgorithm.checkPermutation(
            "krqdpwdvgfuogtobtyylexrebrwzynzlpkotoqmokfpqeibbhzdjcwpgprzpqersmmdxdmwssfbfwmmvrxkjyjteirloxpbiopso",
            "pyymgxtdqzqxxkmirptmbewjobpslwkbmmzfbwzmltowevsofkydrejdpcoripjlewoqzgusvypotrdkepbqspxdmoyrfnyrbrof"));
        Assertions.assertFalse(StringAlgorithm.checkPermutation(
            "jzvthzihsvghjhbrpfhdwixmyaxjrdzfvnhpmyrbqjpdffykqgahgzpjwvouurr",
            "hhqhxjyrghjjsmduaxppwrqkikqnfdrzjowapehtbyrgrfyprrfrebzduxvvhhu"));
    }

    @Test
    public void replaceSpacesTest() {
        Assertions.assertEquals("Mr%20John%20Smith", StringAlgorithm.replaceSpaces("Mr John Smith    ", 13));
    }

    @Test
    public void canPermutePalindromeTest() {
        Assertions.assertTrue(StringAlgorithm.canPermutePalindrome("tactcoa"));
    }

    @Test
    public void oneEditAwayTest() {
        Assertions.assertTrue(StringAlgorithm.oneEditAway("pale", "ple"));
        Assertions.assertFalse(StringAlgorithm.oneEditAway("pales", "pal"));
    }

    @Test
    public void compressStringTest() {
        Assertions.assertEquals("a2b1c5a3", StringAlgorithm.compressString("aabcccccaaa"));
        Assertions.assertEquals("abbccd", StringAlgorithm.compressString("abbccd"));
    }

    @Test
    public void isFlipedStringTest() {
        Assertions.assertTrue(StringAlgorithm.isFlipedString("waterbottle", "erbottlewat"));
        Assertions.assertTrue(StringAlgorithm.isFlipedString("ab", "ba"));
        Assertions.assertFalse(StringAlgorithm.isFlipedString("aa", "aba"));
        Assertions.assertTrue(StringAlgorithm.isFlipedString(
            "LmMoLrUxaeSgUhqFsicojxzsbbBobkzkigNyzreunviUECVpPaWKUTMfgskTiirzDkLQFQcTmvdeKpeAvypDMTJTGZRcGOlbJDVFlXNmORIJjhhGyMdGnGpefjLinqwESmCexewgloibkZxeTydRnyFRyDPMyPumFjhjuGnNmCKhOnWPYfUBmlppeBcqhoggzPqXcpYRYIuFbCuxpbaScUGYZWZVQxnOChBPIbozFagLalTGGjjAJJnPiMPcMJMxlYfBJBqtejxqXqgHgcoLGqqIaORJrEQMbqlbzddjOWJOyFkksYvdxUBPbzYVrxMKOYPigNwtXWGBqtXxUOCuIpGigRErIkkYbdDKuXmHoIXXWIiisBLwWqdKporlfbcHZicevgpAUOkeiFIeaSoaeXlXGfHFzImzCYunHleAEkzfmAirrMeUGczkBfzHBnrrBoiXVXELXMjOEXkQYJWkzRfTMeAyEKJstkUAuwkywhpDreIfrwQJLWLdAmaSlCLKdGcCjbaPPyHcGNbskyZgRahgieOqmztbakPRBOUHLRSfquGjUtlfbRJfMlOiFKFQcYDJaMgOGlnEQmHtaYDRpcGamZlZqLrAIDdMRPvelfBykZWNCCspjmLPczMQuTSxviiLtOMvdmLXDsffTAYMeVQReYRGoNVViteGksLdYyWLOxTpwqknfysBLASGgPoyGSRsAdXIXmKuWYIUjZeeRKfarTRTFlQDwvzFPFpcEMCxRMWyuySyMPCFFmAnCONFxTsIzQIMhApfVifcxlUTXdCKEKdDeJCfPnmRXTsNoCllqjRMtXBISwfeUMzeLwQwgQbbXvMzGctiBIQciIljKIkzMmnedtLCxaVnfBXEimIlrBqmsvWDEIoWiUFSMxeVgzqkqFJLdywojNkLwWVkIrzneqSPIsIPvwNaXbUfpxegkVhhIKOAdCtmmesmyYGhfJtqadOsGQIBuTOZxHINAMwKuBWikjwEdFDTksuICVTCDHEqvrUWOpgNONVkNkERATbHBonoAbjPFkthfgOTffCzgQrcaEYEkKyFNbBNmwljQFeKIyEPSiHZhlFUaEdYGDcYJgIYpwrevmFKEoqNtRhKSFrQNRJNkNOqjgKCMGYCCbDMMgerlvjanGrovokGfUUWDINbGCsPNINPBFygvDoynpxDZHQVbsXLFNjKmuFlYOhstBGdTsNSgsZVRXUQKrLqSTMCMHobsTZGVYOfGxkVPGbtaiAJostQbRctXJgysaWQuSfvYxwidQuLbkxIaJXIzbWvNDphIbeYBRBGlChLmxVpTezcjYmBkBslMqkEaPYrLROcZrxXiEDiBuLRcqlyNZAfVTlQawPVcqxadDcWKGXuDJUBxsRqoXXqqkzchsqgrguPpJDXrcrbXLIfmucbgWaIwqxwZNyuKJrqcEisRpVeuEdznTJsbQimFLfUQriOYYqaychChJogAZjvLjuDPONzyNzGnnaFyhCVLsxTmRMVVOpfhQqgPArwwOSOIdeiroBBhWUFWvTsdRZYWzTrXpRIWGFgKMaODDnOtLMZmzwxOJfoBlTmngxpBhsDYzUqpMtpknioFZeSBYqiSAVkZqifBQyqYuFoOPUIqdTWtQsotGLhVWKhesGgTVJPXmXqUeFpIpFeVVyOUmJxjiQfppSUKLdwNSoWVPIdzHXbIQvzyhiTUGomjTcVWgxSXyEznahWANjwhalYNnchohNAkAXWkWIVdiKPaAPnkWprRIHmqWfnLnOgUfNhThPmwJymURQHejsnqgdWKRUJZqEwfVnSDMyuHWKTPoNNnTrQhytdYWBsiKfAqWUfgjGQyxpQsRZxuUyaXerBDsJANuEhpNNejoaXrkVDqGrkQMbTogtdHsOHrhmIZajoMZjNwYGlBXrkTOphhvNWArIeyEMYrEkGofZIKQkaMyTLrpuWpjClEsbCEVjmwCEPmdDfFELazsIDopLmsrmXgEROgitmYUDqWqrpNtnhtEcxKsccAYKlhFGtzqwLSxgfXCQykyUEpIqpoVwPizirScwwQSbnhfBDYzVriWYpKZhxLwrHBtrcXsiJgTvRRNIkwJfIRfqZramufpeCQxMTZAhGrQLelrJQhScdqPyKUdNVZTCMdwZzydnInkQgyOiMxkAGqJfKakOOwsbNvIffJxFuGbtIyonefNHCCPAonrPaZihkEeMGZyTembSLsBpLeERBFFwnPhrTXTVvoNRTOwDwIKoBrMAGwPvhHOWlVkZcvSIjjUTuArbxnjkCnqmyQpIxqMqLlXxTKMztlQFxUDWhbpYCexaSyVvtGfwbCMcZgovtHslmazhQJTNQpmomjPYzrRiPGpodFHTiFSjQijeXEeBUEVaggRjTdAyMViqcwKDkUxXtSXuXOKRkYHTgZKyRqBJAcmmhXVyiBvceeOyfGauHXnnPAWOrNylLbPBbuxRfVTwOXJxQslgmldRKAICHRgOxvuaAPOtgDYBWFXABExfUyvuuxpMBWHFSyWCLzWcKQfntdciWKBfLTxYxWtVVYoNiJbFOawEEJChUCEoWLkXQCjEnXmOYOBTnXNxgCBcyKUuftmPyQgByuuDSOUMSbQFjuYOrQmLRVqYODLxhJyuhJnoM",
            "xzsbbBobkzkigNyzreunviUECVpPaWKUTMfgskTiirzDkLQFQcTmvdeKpeAvypDMTJTGZRcGOlbJDVFlXNmORIJjhhGyMdGnGpefjLinqwESmCexewgloibkZxeTydRnyFRyDPMyPumFjhjuGnNmCKhOnWPYfUBmlppeBcqhoggzPqXcpYRYIuFbCuxpbaScUGYZWZVQxnOChBPIbozFagLalTGGjjAJJnPiMPcMJMxlYfBJBqtejxqXqgHgcoLGqqIaORJrEQMbqlbzddjOWJOyFkksYvdxUBPbzYVrxMKOYPigNwtXWGBqtXxUOCuIpGigRErIkkYbdDKuXmHoIXXWIiisBLwWqdKporlfbcHZicevgpAUOkeiFIeaSoaeXlXGfHFzImzCYunHleAEkzfmAirrMeUGczkBfzHBnrrBoiXVXELXMjOEXkQYJWkzRfTMeAyEKJstkUAuwkywhpDreIfrwQJLWLdAmaSlCLKdGcCjbaPPyHcGNbskyZgRahgieOqmztbakPRBOUHLRSfquGjUtlfbRJfMlOiFKFQcYDJaMgOGlnEQmHtaYDRpcGamZlZqLrAIDdMRPvelfBykZWNCCspjmLPczMQuTSxviiLtOMvdmLXDsffTAYMeVQReYRGoNVViteGksLdYyWLOxTpwqknfysBLASGgPoyGSRsAdXIXmKuWYIUjZeeRKfarTRTFlQDwvzFPFpcEMCxRMWyuySyMPCFFmAnCONFxTsIzQIMhApfVifcxlUTXdCKEKdDeJCfPnmRXTsNoCllqjRMtXBISwfeUMzeLwQwgQbbXvMzGctiBIQciIljKIkzMmnedtLCxaVnfBXEimIlrBqmsvWDEIoWiUFSMxeVgzqkqFJLdywojNkLwWVkIrzneqSPIsIPvwNaXbUfpxegkVhhIKOAdCtmmesmyYGhfJtqadOsGQIBuTOZxHINAMwKuBWikjwEdFDTksuICVTCDHEqvrUWOpgNONVkNkERATbHBonoAbjPFkthfgOTffCzgQrcaEYEkKyFNbBNmwljQFeKIyEPSiHZhlFUaEdYGDcYJgIYpwrevmFKEoqNtRhKSFrQNRJNkNOqjgKCMGYCCbDMMgerlvjanGrovokGfUUWDINbGCsPNINPBFygvDoynpxDZHQVbsXLFNjKmuFlYOhstBGdTsNSgsZVRXUQKrLqSTMCMHobsTZGVYOfGxkVPGbtaiAJostQbRctXJgysaWQuSfvYxwidQuLbkxIaJXIzbWvNDphIbeYBRBGlChLmxVpTezcjYmBkBslMqkEaPYrLROcZrxXiEDiBuLRcqlyNZAfVTlQawPVcqxadDcWKGXuDJUBxsRqoXXqqkzchsqgrguPpJDXrcrbXLIfmucbgWaIwqxwZNyuKJrqcEisRpVeuEdznTJsbQimFLfUQriOYYqaychChJogAZjvLjuDPONzyNzGnnaFyhCVLsxTmRMVVOpfhQqgPArwwOSOIdeiroBBhWUFWvTsdRZYWzTrXpRIWGFgKMaODDnOtLMZmzwxOJfoBlTmngxpBhsDYzUqpMtpknioFZeSBYqiSAVkZqifBQyqYuFoOPUIqdTWtQsotGLhVWKhesGgTVJPXmXqUeFpIpFeVVyOUmJxjiQfppSUKLdwNSoWVPIdzHXbIQvzyhiTUGomjTcVWgxSXyEznahWANjwhalYNnchohNAkAXWkWIVdiKPaAPnkWprRIHmqWfnLnOgUfNhThPmwJymURQHejsnqgdWKRUJZqEwfVnSDMyuHWKTPoNNnTrQhytdYWBsiKfAqWUfgjGQyxpQsRZxuUyaXerBDsJANuEhpNNejoaXrkVDqGrkQMbTogtdHsOHrhmIZajoMZjNwYGlBXrkTOphhvNWArIeyEMYrEkGofZIKQkaMyTLrpuWpjClEsbCEVjmwCEPmdDfFELazsIDopLmsrmXgEROgitmYUDqWqrpNtnhtEcxKsccAYKlhFGtzqwLSxgfXCQykyUEpIqpoVwPizirScwwQSbnhfBDYzVriWYpKZhxLwrHBtrcXsiJgTvRRNIkwJfIRfqZramufpeCQxMTZAhGrQLelrJQhScdqPyKUdNVZTCMdwZzydnInkQgyOiMxkAGqJfKakOOwsbNvIffJxFuGbtIyonefNHCCPAonrPaZihkEeMGZyTembSLsBpLeERBFFwnPhrTXTVvoNRTOwDwIKoBrMAGwPvhHOWlVkZcvSIjjUTuArbxnjkCnqmyQpIxqMqLlXxTKMztlQFxUDWhbpYCexaSyVvtGfwbCMcZgovtHslmazhQJTNQpmomjPYzrRiPGpodFHTiFSjQijeXEeBUEVaggRjTdAyMViqcwKDkUxXtSXuXOKRkYHTgZKyRqBJAcmmhXVyiBvceeOyfGauHXnnPAWOrNylLbPBbuxRfVTwOXJxQslgmldRKAICHRgOxvuaAPOtgDYBWFXABExfUyvuuxpMBWHFSyWCLzWcKQfntdciWKBfLTxYxWtVVYoNiJbFOawEEJChUCEoWLkXQCjEnXmOYOBTnXNxgCBcyKUuftmPyQgByuuDSOUMSbQFjuYOrQmLRVqYODLxhJyuhJnoMLmMoLrUxaeSgUhqFsicoj"));
    }

}
