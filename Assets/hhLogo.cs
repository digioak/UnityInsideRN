using System.Globalization;
using UnityEngine;

public class hhLogo : MonoBehaviour
{
    // Start is called once before the first execution of Update after the MonoBehaviour is created
    void Start()
    {

    }

    // Update is called once per frame
    void Update()
    {

    }

    void Rotate(int degrees)
    {
        Debug.Log("Logging: " + degrees);
        // Rotate the object around its local Y axis
        transform.Rotate(0, 0, degrees);
    }
}
